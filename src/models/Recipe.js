import { observable, computed } from "mobx"
import uuid from "uuid"

export default class Recipe {
  // Model Attributes
  uuid = uuid.v4()
  @observable name = ""
  @observable type = ""
  @observable cook_time = 0
  @observable ingredients = []
  @observable checked = false
  // Reference
  store = null

  constructor(data={}, store) {
    Object.assign(this, data)
    this.store = store
  }

  @computed get visible() {
    if (!this.store.ingredient) return true
    return (this.store.ingredient && this.ingredients.indexOf(this.store.ingredient) > -1)
  }

  @computed get info() {
    return `( ${this.cook_time} minutes | ${this.ingredients.length} ingredients )`
  }

  asJSON = ()=> {
    return {
      name: this.name,
      type: this.type,
      cook_time: this.cook_time,
      ingredients: this.ingredients,
      checked: this.checked,
    }
  }
}