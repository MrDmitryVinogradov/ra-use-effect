import React from 'react'

function List(props) {
  return (
    <ul className='list'>
      {props.users.map((item) =>
        <li id={item.id} onClick={props.handleClick} key={item.id}>
          {item.name}
        </li>
      )}
    </ul>
  )
}

export default List
