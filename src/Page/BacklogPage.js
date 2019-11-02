import React, { Component } from "react";
import ListUser from "../Components/User/ListUser";
import ItemBoard from "../Components/Board/ItemBoard";
import HeaderBoard from "../Components/Board/HeaderBoard";
import MenuLog from '../Components/BackLog/MenuLog';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from "reactstrap";
import MenuBoard from "../Components/Board/MenuBoard";
import ListIssues from "../Components/BackLog/ListIssues";
import CreateSprint from '../Components/Sprint/modalCreate'
import ListDetailIssues from "../Components/BackLog/ListDetailIssues";
class BacklogPage extends Component {

  render() {
    const { match: { params: { id } } } = this.props
    return (
      <div>
        <div className="detail-card">
          <div className="board-header">
            <HeaderBoard />
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
            </div>
            <div className="filter">
              <p>Quick Filters: </p>
              <ListUser params={id} />
            </div>
            <div className="row content-backlog board-task">
              <div className="col-md-1">
                <MenuBoard />
              </div>
              <div className="col-md-2 epic-blacklog">
               <MenuLog params = {id}/>
              </div>
              <div className="col-md-8 defineIssue">
              <CreateSprint params={id}/>
               <ListDetailIssues params={id}/>
               {/* CreateIssue dang an */}
               <ListIssues params = {id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BacklogPage