import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
export default class IteamHeader extends Component {
  render() {
    return (
      <div>
        <ul className="nav_links list-unstyled">
        <li>
        <Link to="/viewAll">
          <a href="/viewAll">
                <span className="fas fa-home" />
                <p>Home</p>
              </a>
            </Link>
            </li>
            {/* <li className="nav-link-list">
              <a href="index.html">
                <span className="fas fa-home" />
                <p>Home</p>
              </a>
            </li>
            <li> */}
            <li>
            <Link to="/board">
          <a href="/board">
                <span className="fas fa-question" />
                <p>Board</p>
              </a>
            </Link>
            </li>
            <li>
              <a href="#services">
                <span className="fas fa-cog" />
                <p>Services</p>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span className="fa fa-clipboard" />
                <p>Blog</p>
              </a>
            </li>
            <li>
            <Link to = "/login">
            <a href="/login">
                <span className="fa fa-users" />
                <p>Team</p>
              </a>
            </Link>
            </li>
          </ul>
      </div>
    )
  }
}
