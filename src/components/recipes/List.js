import React from "react"
import { observer } from "mobx-react"
import RecipeItem from "./Item"
// import styles from "./style.scss"

@observer
export default class RecipeList extends React.Component {

  static contextTypes = {
    RecipeStore: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    params: React.PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.RecipeStore = context.RecipeStore
  }

  componentDidMount() {
    if (!this.RecipeStore.isLoaded) {
      this.RecipeStore.fetchItems()
    }
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