import React from 'react'

import Header from './Header'
import SideMenu from './SideMenu'
import Footer from './Footer'

// require('../../smartadmin/components/less/components.less');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
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

