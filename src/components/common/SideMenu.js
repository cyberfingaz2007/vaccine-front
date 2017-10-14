import React from 'react'


// require('../../smartadmin/components/less/components.less');

export default class SideMenu extends React.Component {
  render() {
    return (
      <aside className="left-side sidebar-offcanvas">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="img/26115.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Hello, Jane</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type='submit' name='seach' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            <li className="active">
              <a href="index.html">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="general.html">
                <i className="fa fa-gavel"></i> <span>General</span>
              </a>
            </li>
            <li>
              <a href="basic_form.html">
                <i className="fa fa-globe"></i> <span>Basic Elements</span>
              </a>
            </li>
            <li>
              <a href="simple.html">
                <i className="fa fa-glass"></i> <span>Simple tables</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}

