import React, { Component } from 'react'
import {
  Table
} from "reactstrap";
import _ from "lodash";
import { Link } from 'react-router-dom' 
export default class listProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      staus : true
    }
    this.sortStatusName = this.sortStatusName.bind(this)
    this.cloneProject = []
  }
    componentWillMount(){
    const user = JSON.parse(localStorage.getItem("userLogin"));
    this.props.SearchEmail(user[0].email);
  }
  sortStatusName(){
    const { project } = this.props;
    project.sort(function(a,b){
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      console.log(nameA,nameB)
      if(nameA < nameB)
      {
        return -1
      }
      if(nameA > nameB)
      {
         return 1
      }
      return 0;
    })
    this.cloneProject = _.cloneDeep(project)
    this.setState({
      status: !this.state.status
    })

  }
  render() {
    const { project, admin } = this.props;
    const {status} = this.state;
    return (
      <div>
        <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name Project <i onClick={this.sortStatusName} class="fas fa-sort"></i></th>
            <th>Date</th>
            <th>Lead</th>
          </tr>
        </thead>
        <tbody>
            {
              !status ?
              _.map(project, (item, key) => {
                return (
               <tr>
               <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.datecreate}</td>
                <td>{
                  _.map(admin, item => {
                    return <Link style={{borderBottom:'1px solid'}} to="detailUser">{item.name}</Link>
                  })
                }</td>
               </tr>
                )
              }) :  _.map(this.cloneProject, (item, key) => {
                return (
               <tr>
               <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.datecreate}</td>
                <td>{
                  _.map(admin, item => {
                    return <Link style={{borderBottom:'1px solid'}} to="detailUser">{item.name}</Link>
                  })
                }</td>
               </tr>
                )
              })
            }
        </tbody>
      </Table>
      </div>
    )
  }
}
