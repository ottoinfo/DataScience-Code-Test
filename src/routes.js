import React from "react"
import { Route } from "react-router"

// Components
import Layout from "./components/layout/Layout"
import RecipeLayout from "./components/layout/Layout"
import NotFound from "./components/404"

export default (
  <Route path="/" component={ Layout }>
    <Route path="" component={ RecipeLayout }/>
    <Route path="*" component={ NotFound }/>
  </Route>
)
