import React, { Component } from "react";
import "../Project/assets/style.css";
import { Link } from "react-router-dom";
import {
  Input,
} from "reactstrap";
import * as actions from "../../Store/actions/project";
import * as actionsAdmin from "../../Store/actions/admin"
import { connect } from "react-redux";
import _ from "lodash";
import { Redirect } from 'react-router-dom';
import ProjectDetail from "../../Components/Project/projectDetail";
import ListProject from "../../Components/Project/listProject";
import ToggleHome from "../../Components/Modal/ToggleHome";
import CreateProject from '../../Components/Modal/CreateProject';
import HeaderCustom from "../../Components/HeaderCustom";
class projectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProject: "",
      valueSearch: "",
      status: true
    };
    this.position = ''
    this.cloneProject = []
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.searchAct = this.searchAct.bind(this)
    this.clearData = this.clearData.bind(this)
  }
  componentDidMount() {
    this.props.getAllListProject();
  }
  clearData(e){
   e.target.value = ''
   this.setState({
     status: true
   })
  }
  searchAct(){
    this.cloneProject = []
    const {project} = this.props;
    _.map(project, (item, key) => {
      if(item.name === this.state.valueSearch){
        this.cloneProject.push(item)
        this.setState({
          status: false
        })
      }
    })
  }
  handleChangeInput(e){
    e.preventDefault();
    this.setState({
      valueSearch: e.target.value
    })
  }
  render() {
    const { project, admin } = this.props;
    console.log(project)
    const {status} = this.state
     _.map(project, item => {
      _.map(item.idmembers, data => {
        this.position = data.position
      })
    })
    return (
      <div className="listProject container row">
        <div className="col-md-3 user-tag">
          <div className="content-user">
            <div className="avatar-image">
              <img
                src="https://66.media.tumblr.com/avatar_76339a619be6_128.pnj"
                alt="Hipster"
              />
            </div>
            <div className="wrap-content">
            <div className="blog-title">
              <span>
              {
                _.map(admin, (item,key) => {
                  return <h1 key ={item._id}>{item.name}</h1>
                })
              }
              </span>
            </div>
            <div className="description">
              <p>{this.position}</p>
              <p></p>
              <div style={{marginLeft:'-17px'}} className="menu">
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
            </div>
          </div>
          <ToggleHome/>
        </div>
        <div className="col-md-3 task-list">
        <div className="project-task-list">
        <h1>Project</h1>
        <ProjectDetail project={project} AddMember={this.props.AddMember} />
        </div>
        </div>
        <div className="col-md-6 project-list">
        <div className="focus-detail">
        <div className="search-project">
        <Input style={{width:'25%', marginBottom:'20px'}} onFocus={this.clearData} onChange={this.handleChangeInput} value={this.valueSearch} type="text" name="text" id="search" placeholder="search" />
        <i onClick={this.searchAct} class="icon-search fas fa-search"></i>
        </div>
        {status ? <ListProject project={project} admin={admin} SearchEmail={this.props.SearchEmail}/> :
        <ListProject project={this.cloneProject} admin={admin} SearchEmail={this.props.SearchEmail}/>
         }
        </div>
       <div className="modal-create">
       <CreateProject/>
       </div>
        </div>
        <HeaderCustom/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    admin: state.admin,
    project: state.project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllListProject: () => dispatch(actions.getListProjectAct()),
    SearchEmail:(email) => dispatch(actionsAdmin.SearchAction(email)),
    AddMember:(id,user) => dispatch(actions.AddMemberAct(id,user))
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(projectContainer);
