import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/admin";
import * as actionsProject from "../../Store/actions/project";
import _ from "lodash";
import { Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from 'react-router-dom' 
import CreateProject from "../Modal/CreateProject";
class HeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
      nameProject:'',
      status: false,
      activeUser : []
    };
    this.toggle = this.toggle.bind(this);
    this.createProject = this.createProject.bind(this);
    this.showToggle = this.showToggle.bind(this);
    this.handleNameProject = this.handleNameProject.bind(this);
    // this.activeUser = []
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  showToggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleNameProject(event){
    event.preventDefault();
    this.setState({
      nameProject : event.target.value
    })
  }
  createProject(event){
    event.preventDefault();
    this.props.createProjectAct(this.state.nameProject)
  }
  componentDidUpdate(preState){
    console.log(preState)
    !_.isEqual(preState.user, this.props.user) && this.ShowInfoUser()
  }
  // componentDidMount(){
  //   this.ShowInfoUser()
  // }
  ShowInfoUser =() => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const {user} = this.props;
    console.log(user)
    // this.props.SearchEmail(user[0].email);
    _.map(user, (data, index) => {
      console.log(userLocal[0].email)
      if(userLocal[0].email === data.email){
        this.setState({
          activeUser: data
        })
      }
    })
  }
  render() {
    // const admin = this.props.admin;
    // const {user} = this.props;
    const { admin, user } = this.props
    const {activeUser} = this.state
    return (
      <div className="header-board">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Jirallo</NavbarBrand>
          <NavbarToggler />
          <div>
            <Navbar color="light" light expand="md">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">DashBoard</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right  >
                      <DropdownItem ><Link to="/viewAll">View All Project</Link></DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <CreateProject/>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div className="user-info">
            <div className="name-user">
              <p>
              <span>{activeUser.name}</span>
                <i className="fas fa-user-tie"></i>
              </p>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    admin: state.admin,
    project: state.project,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SearchEmail: email => dispatch(actions.SearchAction(email)),
    createProjectAct : name => dispatch(actionsProject.createProjectAct(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBoard);
