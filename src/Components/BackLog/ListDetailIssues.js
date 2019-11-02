import React, { Component } from "react";
import * as action from "../../Store/actions/issues";
import { connect } from "react-redux";
import _ from "lodash";
import DescriptTask from "../Task/DescriptTask";
import UpdateIssue from "../Modal/UpdateIssue";
import * as actionIssue from "../../Store/actions/issues";
import * as actionSprint from '../../Store/actions/sprint';
import * as actionAdmin from "../../Store/actions/admin";
import { Button, UncontrolledCollapse, Card, CardBody, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
// import * as actionUser from '../../Store/actions/user';
import swal from 'sweetalert'
import IssueOnSprint from './IssueOnSprint'
class ListDetailIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      status: false,
      highlightItems: [],
    };
    this.idActive = ''
    this.itemACtive = []
    this.itemFlag = ''
    this.idIssue = ''
    // console.log(this.props.AddFlagIssue)
  }
  showContent(id) {
    this.idActive = id
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
  AddFlagIssueAct = (item) => {
    // this.setState({
    //   highlightItems: [...this.state.highlightItems, item._id]
    // })
    const {issues} = this.props
   _.map(_.compact(issues), (data,key)=> {
      if(data._id === item){
        this.itemFlag = item
        document.getElementsByClassName('nameIssue')[key].setAttribute('style','color: red')
      }
   })
  }
  RemoveFlag = (item) => {
    const {issues} = this.props
    _.map(_.compact(issues), (data,key)=> {
       if(data._id === item){
         this.itemFlag = item
         document.getElementsByClassName('nameIssue')[key].setAttribute('style','color: black')
       }
    })
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
  componentWillMount() {
    this.props.showListIssue(this.props.params);
    this.props.showListSprint(this.props.params);
  }
  render() {
    const { issues, sprint, user, admin } = this.props;
    const { modal, status} = this.state;
    console.log(sprint)
    console.log(this.itemACtive)
    return (
      <div>
         <div className="list-sprint">
         <ul>
         {
          _.map(sprint,(data, key) => {
            console.log(data)
            return (
              <div className="container sprint">
              <li style={{marginLeft:'-27px'}} key={key}>{data.name}</li>
              <div className={`optionbtn ${!modal ? '' : "custom"}`}>
              <IssueOnSprint user ={user} admin={admin} filterSprint={data} issues={issues} />
              {/* <div className="btn-toggle" >
              <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
              <i style ={{paddingTop:'2px'}} class="fas fa-ellipsis-h"></i>
              </Button>
              <UncontrolledCollapse className="show-content" toggler="#toggler1">
                <Card>
                  <CardBody>
                  <Button outline color="primary">Edit Sprint</Button>
                   <Button outline color="secondary">Delete Sprint</Button>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div> */}
              </div>
              </div>
            )
          })
         }
          </ul>
         </div>
        <div className="item-issue">
        <p style={{textAlign:'left', marginLeft:'72px'}}>BackLog</p>
          {_.map(_.compact(issues), (item, index) => {
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
                  _.map(sprint, (data, index) => {
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
    );
  }
}
const mapStateToProps = state => {
  return {
    issues: state.issue,
    sprint: state.sprint,
    user : state.user,
    admin: state.admin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showListIssue: id => dispatch(action.showListIssueAct(id)),
    EditIssuesAct: (id, data) => dispatch(actionIssue.EditIssuesAct(id, data)),
    showListSprint: (id) => dispatch(actionSprint.showListSprintAct(id)),
    findUserLikeEmail:(email) => dispatch(actionAdmin.SearchAction(email)),
    assignTaskIssueAct: (idIssue, idUser) => dispatch(action.assignTaskIssueAct(idIssue, idUser)),
    AddIssueIntoSprint: (idIssue, idSprint) => dispatch(actionIssue.AddIssueIntoSprint(idIssue, idSprint))
    // findUserLikeIDAct: (idUser) => dispatch(actionUser.findUserLikeIDAct(idUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDetailIssues);
