import React from "react"
import { observer } from "mobx-react"

// Stores
import RecipeStore from "./stores/RecipeStore"
import UIStore from "./stores/UIStore"

// Setup Params on Stores
RecipeStore.setup({ UIStore })

@observer
export default class AppWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = {
    RecipeStore: React.PropTypes.object,
    UIStore: React.PropTypes.object,
  }

  getChildContext() {
    return {
      RecipeStore,
      UIStore,
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