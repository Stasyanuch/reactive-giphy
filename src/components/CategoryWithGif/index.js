import React from 'react'
import Image from '../Image'
import './style.scss'

const CategoryWithGif = props => {
  const { category } = props
  return (
    <div onClick={props.onSelect} className="category-container">
      <span className="label">{category && category.name}</span>
      <Image gif={category.gif} />
    </div>
  )
}

export default CategoryWithGif
