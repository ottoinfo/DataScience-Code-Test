import React from "react"
import { observer } from "mobx-react"
import UIStore from "../stores/UIStore"
import RecipesList from "./recipes/List"
import IngredientsList from "./ingredients/List"

@observer
export default class App extends React.Component {

  render() {
    return (
      <div id="wrapper">
        <h1>Recipes</h1>
        <RecipesList />
        <IngredientsList />
      </div>
    )
  }
}