import React from "react"
import { observer } from "mobx-react"

// Stores
import GalleryStore from "./stores/RecipesStore"
import UIState from "./UIState"

// Setup Params on Stores
GalleryStore.setup({ AccountStore, UIState })

@observer
export default class AppWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = {
    GalleryStore: React.PropTypes.object,
    UIState: React.PropTypes.object,
  }

  getChildContext() {
    return {
      GalleryStore,
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