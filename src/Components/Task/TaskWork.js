import React, { Component } from 'react'
import CardTask from './CardTask'
import { Spinner } from 'reactstrap';
export default class TaskWork extends Component {
  render() {
    return (
      <div className="taskWork">
      <div className="text-task">
          <ul>
            <li>OPEN <Spinner className="spinner" type="grow" color="primary" /></li>
            <li>PROCESS  <Spinner className="spinner" type="grow" color="secondary" /> </li>
            <li>REVIEW  <Spinner className="spinner" type="grow" color="success" /> </li>
            <li>DELOYED   <Spinner className="spinner" type="grow" color="danger" /></li>
            <li>RELEASE   <Spinner className="spinner" type="grow" color="warning" /></li>
          </ul>
      </div>
       <div className="task-content">
       <ul>
          <li><CardTask/></li>
          <li><CardTask/></li>
          <li><CardTask/></li>
          <li><CardTask/></li>
          <li><CardTask/></li>
        </ul>
       </div>
      </div>
    )
  }
}
