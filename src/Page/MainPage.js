import React, { Component } from 'react'

export default class MainPage extends Component {
  render() {
    return (
      <div>
       <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
         <header className="app-header navbar">
        <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img className="navbar-brand-full" src="img/brand/logo.svg" width={89} height={25} alt="CoreUI Logo" />
          <img className="navbar-brand-minimized" src="img/brand/sygnet.svg" width={30} height={30} alt="CoreUI Logo" />
        </a>
        <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Settings</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-bell" />
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-list" />
            </a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-location-pin" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <img className="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header text-center">
                <strong>Account</strong>
              </div>
              <a className="dropdown-item" href="#">
                <i className="fa fa-bell-o" /> Updates
                <span className="badge badge-info">42</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-envelope-o" /> Messages
                <span className="badge badge-success">42</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-tasks" /> Tasks
                <span className="badge badge-danger">42</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-comments" /> Comments
                <span className="badge badge-warning">42</span>
              </a>
              <div className="dropdown-header text-center">
                <strong>Settings</strong>
              </div>
              <a className="dropdown-item" href="#">
                <i className="fa fa-user" /> Profile</a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-wrench" /> Settings</a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-usd" /> Payments
                <span className="badge badge-secondary">42</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-file" /> Projects
                <span className="badge badge-primary">42</span>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <i className="fa fa-shield" /> Lock Account</a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-lock" /> Logout</a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
          <span className="navbar-toggler-icon" />
        </button>
        <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
          <span className="navbar-toggler-icon" />
        </button>
      </header>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="nav-icon icon-speedometer" /> Dashboard
                <span className="badge badge-primary">NEW</span>
              </a>
            </li>
            <li className="nav-title">Theme</li>
            <li className="nav-item">
              <a className="nav-link" href="colors.html">
                <i className="nav-icon icon-drop" /> Colors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="typography.html">
                <i className="nav-icon icon-pencil" /> Typography</a>
            </li>
            <li className="nav-title">Components</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-puzzle" /> Base</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="base/breadcrumb.html">
                    <i className="nav-icon icon-puzzle" /> Breadcrumb</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/cards.html">
                    <i className="nav-icon icon-puzzle" /> Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/carousel.html">
                    <i className="nav-icon icon-puzzle" /> Carousel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/collapse.html">
                    <i className="nav-icon icon-puzzle" /> Collapse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/forms.html">
                    <i className="nav-icon icon-puzzle" /> Forms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/jumbotron.html">
                    <i className="nav-icon icon-puzzle" /> Jumbotron</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/list-group.html">
                    <i className="nav-icon icon-puzzle" /> List group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/navs.html">
                    <i className="nav-icon icon-puzzle" /> Navs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/pagination.html">
                    <i className="nav-icon icon-puzzle" /> Pagination</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/popovers.html">
                    <i className="nav-icon icon-puzzle" /> Popovers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/progress.html">
                    <i className="nav-icon icon-puzzle" /> Progress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/scrollspy.html">
                    <i className="nav-icon icon-puzzle" /> Scrollspy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/switches.html">
                    <i className="nav-icon icon-puzzle" /> Switches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tables.html">
                    <i className="nav-icon icon-puzzle" /> Tables</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tabs.html">
                    <i className="nav-icon icon-puzzle" /> Tabs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tooltips.html">
                    <i className="nav-icon icon-puzzle" /> Tooltips</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-cursor" /> Buttons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="buttons/buttons.html">
                    <i className="nav-icon icon-cursor" /> Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/button-group.html">
                    <i className="nav-icon icon-cursor" /> Buttons Group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/dropdowns.html">
                    <i className="nav-icon icon-cursor" /> Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/brand-buttons.html">
                    <i className="nav-icon icon-cursor" /> Brand Buttons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="nav-icon icon-pie-chart" /> Charts</a>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star" /> Icons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="icons/coreui-icons.html">
                    <i className="nav-icon icon-star" /> CoreUI Icons
                    <span className="badge badge-success">NEW</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/flags.html">
                    <i className="nav-icon icon-star" /> Flags</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/font-awesome.html">
                    <i className="nav-icon icon-star" /> Font Awesome
                    <span className="badge badge-secondary">4.7</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/simple-line-icons.html">
                    <i className="nav-icon icon-star" /> Simple Line Icons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-bell" /> Notifications</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="notifications/alerts.html">
                    <i className="nav-icon icon-bell" /> Alerts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/badge.html">
                    <i className="nav-icon icon-bell" /> Badge</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/modals.html">
                    <i className="nav-icon icon-bell" /> Modals</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="widgets.html">
                <i className="nav-icon icon-calculator" /> Widgets
                <span className="badge badge-primary">NEW</span>
              </a>
            </li>
            <li className="divider" />
            <li className="nav-title">Extras</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star" /> Pages</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="login.html" target="_top">
                    <i className="nav-icon icon-star" /> Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register.html" target="_top">
                    <i className="nav-icon icon-star" /> Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="404.html" target="_top">
                    <i className="nav-icon icon-star" /> Error 404</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="500.html" target="_top">
                    <i className="nav-icon icon-star" /> Error 500</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button className="sidebar-minimizer brand-minimizer" type="button" />
      </div>
      </div>
      
      </div>
    )
  }
}
