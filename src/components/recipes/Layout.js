import React from "react"
import { observer } from "mobx-react"
import RecipesList from "./List"
import IngredientsList from "../ingredients/List"
import styles from "./style.scss"

@observer
export default class Layout extends React.Component {

  static contextTypes = {
    RecipeStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.RecipeStore = context.RecipeStore
  }

  componentDidMount() {
    if (!this.RecipeStore.isLoaded) {
      this.RecipeStore.fetch()
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.recipes}>
          <h1>Recipes</h1>
          <RecipesList recipes={this.RecipeStore.getItems} />
        </div>

        <div className={styles.spacer} />

        <div className={styles.right_rail}>
          <h2>Ingredients</h2>
          <IngredientsList ingredients={this.RecipeStore.getIngredients} />
        </div>
      </div>
    )
  }
}