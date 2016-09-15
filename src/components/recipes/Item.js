import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class RecipeItem extends React.Component {

  static propTypes = {
    recipe: React.PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.recipe = props.recipe
  }

  render() {
    if (!this.recipe.visible) return null
    return (
      <div className={styles.item}>
        <input type="checkbox" checked={this.recipe.checked} onChange={(ev)=> Boolean(this.recipe.checked = ev.target.checked)}/>
        <p>{this.recipe.name} {this.recipe.info}</p>
      </div>
    )
  }
}