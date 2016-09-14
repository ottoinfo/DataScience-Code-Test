import React from "react"
import { observer } from "mobx-react"
import Header from "./Header"
import Footer from "./Footer"

@observer
export default class Layout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    options: React.PropTypes.string,
  }

  render() {
    return (
      <div id="layout">
        <Header />
        <div id="content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }

}