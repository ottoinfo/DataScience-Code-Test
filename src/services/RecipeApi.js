import api from "superagent"

export default class RecipeApi {
  url = "/api/recipes"

  fetch = ()=> {
    return api.get(this.url).accept("application/json")
  }
}