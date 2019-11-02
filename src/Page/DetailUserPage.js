import React, { Component } from "react";
import {
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import UpdateUser from "../Components/User/UpdateUser";
import * as actions from "../Store/actions/admin";
import * as actionsProject from "../Store/actions/project";
import * as actionsMember from '../Store/actions/member';
import { connect } from "react-redux";
import _ from "lodash";
import ProjectDetail from "../Components/Project/projectDetail";
import CreateProject from "../Components/Modal/CreateProject";
import InfoUser from "../Components/Modal/InfoUser";
class DetailUserPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      EmailUser: ''
    }
    this.name = "";
    this.id = "";
    this.position = ''
    this.getInfoUser = this.getInfoUser.bind(this);
    this.findUserLikeEmail = this.findUserLikeEmail.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  componentDidMount() {
    this.getInfoUser();
    this.props.getAllListProject();
  }
  getInfoUser() {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    this.props.SearchEmail(user[0].email);
    console.log(this.props.user);
  }
  handleEmail(e){
    e.preventDefault()
    this.setState({
      EmailUser: e.target.value
    })
  }
  findUserLikeEmail(){
    console.log(this.state.EmailUser)
    this.props.SearchEmail(this.state.EmailUser)
  }
  render() {
    // const admin = this.props.admin;
    // const project = this.props.project;
    // const user = this.props.user;
    // const {member} = this.props
    const {admin, project, user, member} = this.props
    _.map(admin, item => {
      this.name = item.name;
      this.id = item._id;
    });
    _.map(project, item => {
      _.map(item.idmembers, data => {
        this.position = data.position
      })
    })
    return (
      <div className="detail-user">
      
        <div className="header-detail"></div>
        <div className="content-user">
          <div className="avatar-image">
            <img
              src="https://66.media.tumblr.com/avatar_76339a619be6_128.pnj"
              alt="Hipster"
            />
          </div>
          <div className="wrap-content">
          <div className="blog-title">
            <div class="name-user">
              <h1>{this.name}</h1>
            </div>
            <div class="detail">
            <InfoUser admin={admin}/>
            </div>
          </div>
          <div className="description">
            <p>{this.position}</p>
            {/* <div>
            {
                _.map(admin, (item,index) => {
                  console.log(item)
                  return <UpdateUser key={index} data ={item}
                 id={this.id} />
                })
              }
            </div> */}
            <div style={{marginTop:'20px'}} className="menu">
              <ul>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
                <li>
                  <i class="fab fa-facebook"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-github"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className='search'>
      <Input type="text" name="text" value={this.EmailUser} onChange={this.handleEmail} id="exampleSelectMulti" placeholder="search"></Input>
      <i onClick={this.findUserLikeEmail} class="icon fas fa-plus"></i>
      </div>
          </div>
        </div>
        <div className="content-task">
          <Card>
          <div className="title">
        <span>Title: Places work</span>
      </div>
            <div className="detail-task-user">
              <ProjectDetail member={member} project={project} AddMemberAct={this.props.AddMemberAct} findUserEmail={this.props.findUserEmail} />
            </div>
          </Card>
        </div>
        <div className="project">
        <CreateProject/>
        </div>
        <div className="breadcrumb-custom">
          <Breadcrumb>
            {/* <BreadcrumbItem active>
              <div>
              {
                _.map(admin, (item,index) => {
                  return <UpdateUser key={index} data ={item}
                 id={this.id} />
                })
              }
              </div>
            </BreadcrumbItem> */}
            <BreadcrumbItem active>
              <a href="#">
                <i class="fas fa-user-friends"></i> People
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="">
                {" "}
                <i class="fas fa-home"></i> Home
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.member)
  return {
    user: state.user,
    member: state.member,
    admin: state.admin,
    project: state.project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SearchEmail: email => dispatch(actions.SearchAction(email)),
    getAllListProject: () => dispatch(actionsProject.getListProjectAct()),
    findUserEmail: email => dispatch(actionsMember.SearchAction(email)),
    AddMemberAct: (idproject, user) => dispatch(actionsProject.AddMemberAct(idproject, user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailUserPage);
