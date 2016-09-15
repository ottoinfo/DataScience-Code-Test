import React from "react"
import { observer } from "mobx-react"
import RecipeItem from "./Item"
import styles from "./style.scss"

@observer
export default class IngredientList extends React.Component {

  static propTypes = {
    ingredients: React.PropTypes.array,
  }

  constructor(props, context) {
    super(props, context)
    this.ingredients = props.ingredients
  }

  componentWillReceiveProps(nextProps) {
    this.ingredients = nextProps.ingredients
  }

  render() {
    if (!this.ingredients.length) return ( <p className={styles.empty}>No Recipes Selected</p> )
    return (
      <div className={styles.list}>
        { this.ingredients.map(ingredient =>
          <RecipeItem key={ingredient} ingredient={ingredient} /> 
        ) }
      </div>
    )
  }
}