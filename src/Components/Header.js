import React, { Component } from 'react'
import IteamHeader from './IteamHeader'

class Header extends Component {
  render() {
    return (
      <div>
      <header>
      <nav className="nav-top">
          {/* Created By Bogdan Nagorniy */}
          <div className="logo">
            <h1>
              <a href="index.html"><img className="logo-menu" src="/logo-menu.jpg" /></a>
            </h1>
          </div>
          <IteamHeader/>
        </nav>
        </header>
      </div>
    )
  }
}
export default Header
