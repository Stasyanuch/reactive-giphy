import React from 'react'
import { Link } from 'react-router-dom'
import powered from '../../assets/poweredLight.png'
import Search from '../Search'
import './style.scss'

const Header = () => {
  return (
    <>
      <Link className="logo-link" to="/">
        <img src={powered} alt="powered by giphy" />
      </Link>
      <Search />
    </>
  )
}

export default Header
