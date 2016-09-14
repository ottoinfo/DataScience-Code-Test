import api from "superagent"

export default class GalleryApi {
  url = "/api/recipes/"

  fetchRecipes = ()=> {
    return api.get(this.url).accept("application/json")
  }
}