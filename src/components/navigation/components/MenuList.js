import React from 'react'

import MenuItem from './MenuItem'

export default function MenuList(props) {

  const {items, claseNom, ...p} = props;

  return (
    <ul className={claseNom} {...p}>
      {items.map((item) => {
        return <MenuItem item={item} key={item._id}/>
      })}
    </ul>
  )
}
