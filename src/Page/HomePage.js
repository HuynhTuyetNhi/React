import React, { Component } from 'react'
// import Header from '../Components/Header';
import BannerLeft from '../Components/BannerLeft';
import HeaderHome from '../Components/HeaderHome';
export default class HomePage extends Component {
  render() {
    return (
      <div>
      {/* <Header/> */}
      <HeaderHome/>
      <BannerLeft/>
      </div>
    )
  }
}
