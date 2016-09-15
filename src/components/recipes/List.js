import React from "react"
import { observer } from "mobx-react"
import RecipeItem from "./Item"
import styles from "./style.scss"

@observer
export default class RecipeList extends React.Component {

  static propTypes = {
    recipes: React.PropTypes.array,
  }

  constructor(props, context) {
    super(props, context)
    this.recipes = props.recipes
  }

  componentWillReceiveProps(nextProps) {
    this.recipes = nextProps.recipes
  }

  render() {
    if (!this.recipes.length) return null
    return (
      <div className={styles.list}>
        { this.recipes.map(recipe =>
          <RecipeItem key={recipe.uuid} recipe={recipe}/> 
        ) }
      </div>
    )
  }
}