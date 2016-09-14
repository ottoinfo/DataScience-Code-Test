import React from "react"
import { observer } from "mobx-react"
import RecipeItem from "./Item"
// import styles from "./style.scss"

@observer
export default class RecipeList extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    RecipeStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.router = context.router
    this.RecipeStore = context.RecipeStore
  }

  render() {
    return (
      <div className="recipes">
        { this.RecipeStore.getItems.map(recipe =>
          <RecipeItem key={recipe.uuid} recipe={recipe}/> 
        ) }
      </div>
    )
  }
}