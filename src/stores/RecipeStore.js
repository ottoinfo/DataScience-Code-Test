import { observable, computed, action } from "mobx"
import AccountApi from "../services/RecipeApi"

export default class RecipeStore {
  @observable pendingRequest = 0

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }
}

const singleton = new AccountStore()
export default singleton