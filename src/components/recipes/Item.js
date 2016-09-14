import React from "react"
import { observer } from "mobx-react"
// import styles from "./style.scss"

@observer 
export default class RecipeItem extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    UIState: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    recipe: React.PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.router = context.router
    this.UIState = context.UIState
    this.recipe = props.recipe
  }

  render() {
    return (
      <div className="recipe">
        <p>{this.recipe.name}</p>
      </div>
    )
  }
}