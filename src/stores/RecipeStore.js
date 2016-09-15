import { observable, computed, action } from "mobx"
import RecipeApi from "../services/RecipeApi"
import Recipe from "../models/Recipe"

export default class RecipeStore {
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0
  @observable ingredient = null

  constructor() {
    this.api = new RecipeApi()
  }

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }

  @computed get getItems() {
    return this.items.toJS()
  }

  @computed get getIngredients() {
    const items = this.getItems
    if (!items.length) return items
    const checked = items.filter(item =>
      item.checked != false && item.visible
    )
    if (!checked.length) return []
    return this.sortIngrediencts(checked)
  }

  @computed get getAllIngredients() {
    const items = this.getItems
    if (!items.length) return items
    return this.sortIngrediencts(items)
  }

  sortIngrediencts(data=[]) {
    let ingredients = []
    data.map(recipe=>
      ingredients = ingredients.concat(recipe.ingredients.toJS())
    )
    return [...new Set(ingredients.sort())] // ES6 remove Dups
  }

  createModel = (data={}) => {
    return new Recipe(data, this)
  }

  @action
  fetch() {
    this.pendingRequest++
    this.api.fetch()
    .end(action("recipe-callback", (err, res) => {
      if (err) {
        console.log("recipe-callback", err)
        throw new Error("Recipe Callback Error")
      }
      this.pendingRequest--
      this.items = res.body.map(this.createModel)
    }))
  }
}

const singleton = new RecipeStore()
export default singleton