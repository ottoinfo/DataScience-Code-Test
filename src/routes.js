import React from "react"
import { Route, IndexRoute } from "react-router"

// Components
import Layout from "./components/layout/Layout"
import RecipeLayout from "./components/recipes/Layout"
import NotFound from "./components/404"

export default (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ RecipeLayout }/>
    <Route path="*" component={ NotFound }/>
  </Route>
)
