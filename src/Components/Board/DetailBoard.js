import React, { Component } from 'react'
import ItemBoard from '../Board/ItemBoard'
import HeaderBoard from '../Board/HeaderBoard'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import ListUser from '../User/ListUser';
export default class DetailBoard extends Component {
  render() {
    return (
      <div>
        <div className="detail-card">
      <div className="board-header">
        <HeaderBoard/>
      </div>
      <div className="container-fluid">
      <div className="title-board">
        <p>Main Board</p>
        <div className="search-form">
        <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">search</Button>
        </InputGroupAddon>
      </InputGroup>
        </div>
        {/* add Iteam */}
      </div>
      <div className="filter">
        <p>Quick Filters: </p>
        <ListUser/>
        {/* API load user in task */}
      </div>
        <ItemBoard/>
      </div>
      </div>
      </div>
    )
  }
}
