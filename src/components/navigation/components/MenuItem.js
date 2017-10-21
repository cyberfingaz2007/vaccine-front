import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import MenuList from './MenuList'


export default class MenuItem extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const item = this.props.item;


    const title = !item.parent ?
      <span className="menu-item-parent"><span>{item.title}</span></span> :
      <span>{item.title}</span>;

    
    const childItems = item.items ? <MenuList claseNom="treeview-menu" items={item.items}/> : null;

    const icon = item.icon ? (
      item.counter ? <i className={item.icon}><em>{item.counter}</em></i> : <i className={item.icon}/>
    ) : null;



    const liClassName = (item.route && this.context.router.isActive(item.route) ) ? 'active' : '';


    const link = item.route ?
      <Link to={item.route} title={item.title} activeClassName="active">
        {icon} {title}
      </Link> :
      <a href={item.href || '#'} onClick={this._handleClick} title={item.title}>
        {icon} {title}
      </a>;


    return <li className={liClassName}>{link}{childItems}</li>
  }
}

