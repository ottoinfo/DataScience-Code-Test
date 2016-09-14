import { observable, computed } from "mobx"
import uuid from "uuid"

export default class Recipe {
  // Model Attributes
  uuid = uuid.v4()
  @observable name = ""
  @observable type = ""
  @observable time = 0
  @observable ingredients = []
  @observable checked = false
  // Reference
  store = null

  constructor(data={}, store) {
    Object.assign(this, data)
    this.store = store
  }

  asJSON = ()=> {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
    }
  }
}