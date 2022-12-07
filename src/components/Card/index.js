import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const state = useSelector((state)=>state)
  return (
    <div>{state.count}</div>
  )
}

export default Card