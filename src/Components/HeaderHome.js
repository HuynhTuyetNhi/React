import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class HeaderHome extends Component {
  render() {
    return (
      <div className="header-home">
         <header>
      <nav className="nav-top">
          {/* Created By Bogdan Nagorniy */}
          <div className="logo">
            <h1>
              <a href="index.html"><img className="logo-menu" src="/logo-menu.jpg" /></a>
            </h1>
          </div>
          <ul className="nav_links list-unstyled">
            <li className="nav-link-list">
            <Link to ="/login">
            <a href="index.html">
                <span className="fas fa-home" />
                <p>Login</p>
              </a>
              </Link>
            </li>
            <li className="nav-link-list">
            <Link to ="/register">
            <a href="index.html">
                <span className="fas fa-home" />
                <p>Register</p>
              </a>
              </Link>
            </li>
            </ul>
        </nav>
        </header>
      </div>
    )
  }
}
