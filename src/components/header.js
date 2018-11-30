import React from 'react'
import { Link } from 'gatsby'
import '../styles/main.css'

const Header = ({ siteTitle }) => (
  <div className="head">
    <div className="second">
      <h3 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h3>
      <img src={require('../images/icon.png')} alt=""/>

    </div>
  </div>
)

export default Header
