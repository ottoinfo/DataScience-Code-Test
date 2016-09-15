import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class IngredientItem extends React.Component {

  static propTypes = {
    ingredient: React.PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    this.ingredient = props.ingredient
  }

  render() {
    return (
      <p className={styles.item}>{this.ingredient}</p>
    )
  }
}