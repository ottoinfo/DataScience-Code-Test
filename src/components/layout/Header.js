import React from "react"
import { observer } from "mobx-react"

@observer
export default class Header extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.router = context.router
  }

  render() {
    return (
      <header>
        <p>DataScience Code Test</p>
      </header>
    )
  }

}