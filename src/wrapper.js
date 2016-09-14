import React from "react"
import { observer } from "mobx-react"

// Stores
import RecipesStore from "./stores/RecipeStore"
import UIState from "./UIState"

// Setup Params on Stores
RecipesStore.setup({ UIState })

@observer
export default class AppWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = {
    RecipesStore: React.PropTypes.object,
    UIState: React.PropTypes.object,
  }

  getChildContext() {
    return {
      RecipesStore,
      UIState,
    }
  }

  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
}