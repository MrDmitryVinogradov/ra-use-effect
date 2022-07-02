import React from 'react'

function ListItem({ name, id, handleClick }) {
  return (
    <li className='list-item' id={id} onClick={handleClick}> {name} </li>
  )
}
export default ListItem