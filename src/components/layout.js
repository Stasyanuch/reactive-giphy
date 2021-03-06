import React, { Component } from 'react'
import Media from 'react-media'

import Drawer from './drawer'
import breakpoints from '../assets/breakpoints'
import '../scss/components/layout.scss'

class Layout extends Component {
  static Header = ({ children }) => <header>{children}</header>

  static Main = ({ children }) => <main>{children}</main>

  static Aside = ({ children }) => (
    <Media query={`(max-width: ${breakpoints.medium})`}>
      {matches => {
        if (matches) {
          return <Drawer>{children}</Drawer>
        }
        return <aside>{children}</aside>
      }}
    </Media>
  )

  static Footer = ({ children }) => <footer>{children}</footer>

  render() {
    return <div className="layout">{this.props.children}</div>
  }
}

export default Layout
