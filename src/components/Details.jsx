import React from 'react'

export default function Details({ data }) {

  if (data.id === 0) {
    return null
  }

  return (
    <div className='details'>
      <img src={data.avatar} alt={data.name}></img>
      <div className='name'>{data.name}</div>
      <div className='line'>{`City: ${data.details.city}`}</div>
      <div className='line'>{`Company: ${data.details.company}`}</div>
      <div className='line'>{`Position: ${data.details.position}`}</div>
    </div >
  )
}