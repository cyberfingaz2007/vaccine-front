import React from 'react'

import Header from './Header'
import SideMenu from './SideMenu'
import Footer from './Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="flow">
        <Header></Header>
        <div className="wrapper row-offcanvas row-offcanvas-left">
          <SideMenu />
          <aside className="right-side">
            <section class="content">
              {this.props.children}
            </section>
            <Footer />
          </aside>
        </div>
      </div>
    )
  }
}

