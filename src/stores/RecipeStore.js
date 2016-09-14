import { observable, computed } from "mobx"
import API from "../services/RecipeApi"

export default class RecipeStore {
  @observable pendingRequest = 0

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }
}

const singleton = new RecipeStore()
export default singleton