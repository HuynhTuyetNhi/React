import React, { Component } from 'react'
import { Button, UncontrolledCollapse, Card, CardBody, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import _ from 'lodash'
import swal from 'sweetalert'
import DescriptTask from '../Task/DescriptTask';
import UpdateIssue from '../Modal/UpdateIssue';
export default class IssueOnSprint extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      status: false,
    }
    this.activeIssue = ''
    this.filterIssue = []
    this.showContent = this.showContent.bind(this)
    // this.RedirectToUpdate = this.RedirectToUpdate.bind(this)
  }
  showContent(id) {
    this.setState({
      modal: true
    });
  }
  RedirectToUpdate =(item)=> {
    this.setState({
      status: true
    })
    this.itemACtive = item
  }
  getIdIssue = (idIssue) => {
    this.idIssue = idIssue
  }
  addIssueToSprint =(id) => {
    this.props.AddIssueIntoSprint(this.idIssue, id)
    swal({
      title: "Insert success!",
      text: "Complete!",
      type: "success",
      confirmButtonText: "Cool"
    });
  }
  render() {
    const {issues, filterSprint, user, admin} = this.props
    console.log(issues, filterSprint)
    _.map(filterSprint.idissues, (item) => {
      this.activeIssue = item
    })
    // this.filterIssue = _.filter(issues,['_id', this.activeIssue])
    // console.log(_.filter(issues,['_id', this.activeIssue])) 
    const {modal, status} = this.state
    return (
      <div>
      <div className="item-issue">
      {/* {_.map(this.filterIssue, item)} */}
      {_.map(_.filter(issues,['_id', this.activeIssue]), (item, index) => {
        return (
          <div
            className={`issues ${!modal ? '' : "custom"}`}
            style={{ float: "left", marginLeft: "75px" }}
          >
          <div className="nameIssue">
            <span onClick={() => this.showContent(item._id)}>
            {item.name}
            </span>
            </div>
            <i data-toggle="modal"
        data-target="#myModal" className="fas fa-cog setting-issue" onClick={() => this.RedirectToUpdate(item)}></i>
         <div className="option-add">
          <UncontrolledDropdown>
            <DropdownToggle caret>
            <i class="fas fa-ellipsis-h" onClick={()=> this.getIdIssue(item._id)} style={{color: 'black', marginTop: '-7px'}}></i>
            </DropdownToggle>
            <DropdownMenu>
            {
              _.map(filterSprint, (data, index) => {
                return <DropdownItem onClick={()=> this.addIssueToSprint(data._id)} key={index}>{data.name}</DropdownItem>
              })
            }
            </DropdownMenu>
          </UncontrolledDropdown>
          </div>
          </div>
        );
      })}
    </div>
     {status == true && <UpdateIssue EditIssuesAct={this.props.EditIssuesAct} params={this.itemACtive._id} data = {this.itemACtive}/> }
     <div className="content-right">
       <div className={`${modal ? "" : "hidden"}`}>
          {
            _.map(_.compact(issues), (item,key) => {
              if(item._id === this.idActive){
                return <DescriptTask key={key} data={item} user ={user} admin={admin} assignTaskIssueAct={this.props.assignTaskIssueAct} findUserLikeEmail={this.props.findUserLikeEmail} AddFlagIssueAct={this.AddFlagIssueAct} RemoveFlag={this.RemoveFlag} />
              }
            })
          }
       </div>
     </div>
     </div>
    )
  }
}
