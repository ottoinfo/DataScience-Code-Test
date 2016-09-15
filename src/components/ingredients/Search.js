import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class IngredientSearch extends React.Component {

  static contextTypes = {
    RecipeStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.RecipeStore = context.RecipeStore
  }

  componentWillReceiveProps(nextProps) {
    this.ingredients = nextProps.ingredients
  }

  changeIngredient = (ev)=> {
    const { target } = ev
    this.RecipeStore.ingredient = target.value
  }

  render() {
    if (!this.RecipeStore.getItems.length) return null
    return (
      <div className={styles.search}>
        <label>Sort Recipes by Ingredient</label>
        <select className={styles.select} onChange={this.changeIngredient}>
          <option value="">All Ingredients</option> 
          { this.RecipeStore.getAllIngredients.map(ingredient =>
            <option key={ingredient} value={ingredient}>{ingredient}</option> 
          ) }
        </select>
      </div>
    )
  }
}