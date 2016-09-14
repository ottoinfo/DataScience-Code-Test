import React from "react"
import { observer } from "mobx-react"
import UIStore from "../stores/UIStore"
import RecipesList from "./recipes/List"
import IngredientsList from "./ingrendients/List"

@observer
export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <title>Recipes</title>
        <RecipesList />
        <IngredientsList />
      </div>
    )
  }
}