import React, { Component } from 'react'
import Headers from '../Components/Header';
import BannerLeft from '../Components/BannerLeft';
export default class UserPage extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <BannerLeft/>
      </div>
    )
  }
}
