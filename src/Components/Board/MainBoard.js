import React, { Component, Fragment } from 'react'
import TaskWork from '../Task/TaskWork'
import DescriptTask from '../Task/DescriptTask'
import { Link } from 'react-router-dom'
import { UncontrolledCollapse, Input, CardBody, Card, Button } from 'reactstrap';
import MenuBoard from './MenuBoard';
export default class MainBoard extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="row">
      <div className="col-md-1 board-task">
        <MenuBoard/>
      </div>
        <div className="col-md-9">
          <TaskWork/>
        </div>
        <div className="col-md-2">
          <DescriptTask/>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
