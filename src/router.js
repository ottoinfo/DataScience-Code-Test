import React from "react"
import { Route } from "react-router"

// Components
import AppWrapper from "./wrapper"
import RecipeLayout from "./components/gallery/Layout"
import NotFound from "./components/404"

export default (
  <Route path="/" component={ AppWrapper }>
    <Route path="/" component={ RecipeLayout }/>
    <Route path="*" component={ NotFound }/>
  </Route>
)
