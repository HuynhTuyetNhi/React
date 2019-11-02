import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import DetailUsers from "../../Components/User/DetailUser";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/admin";
import * as actionGroup from "../../Store/actions/group";
import * as actionUser from "../../Store/actions/user";
import UpdateUser from "../../Components/User/UpdateUser";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      status: true,
      nameGroup: "",
      emailUser: "",
      idGroup: ""
    };
  }
  handleChangeEmail = event => {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  };
  handleSearch = event => {
    event.preventDefault();
    this.props.SearchEmail(this.state.email);
    this.setState({
      status: false
    });
  };
  handleChangeGroup = event => {
    event.preventDefault();
    this.setState({
      nameGroup: event.target.value
    });
  };
  showListGroup = event => {
    event.preventDefault();
    this.props.getListAction(this.state.nameGroup);
  };
  showToggle =() => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleEmailUser = (event) =>{
    event.preventDefault();
    this.setState({
      emailUser: event.target.value
    })
  }
  handleIdGroup = event =>{
    event.preventDefault();
    this.setState({
      idGroup : event.target.value
    })
  }
  insertUserToGroup = (event) =>{
    event.preventDefault();
    this.props.insertUserToGroup(this.state.emailUser, this.state.idGroup)
  }
  render() {
    return (
      <div className="adminPage container-fluid">
        <div className="input-search-email">
          <Form onSubmit={this.handleSearch}>
            <InputGroup
              name="email"
              type="email"
              value={this.state.nameGroup}
              onChange={this.handleChangeEmail}
            >
              <Input />
              <InputGroupAddon>
                <Button type="submit" color="success">
                  Search!
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
        <div className="detailUser">
          {!this.state.status && <DetailUsers admin={this.props} />}
        </div>
        <div>
          <UpdateUser />
        </div>

        {/* FindGroupLikeName */}
        <div className="input-search-email input-get-list">
          <Form onSubmit={this.showListGroup}>
            <InputGroup
              name="text"
              type="text"
              value={this.state.nameGroup}
              onChange={this.handleChangeGroup}
            >
              <Input />
              <InputGroupAddon>
                <Button type="submit" color="success">
                  Search!
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
        {/* InsertUser into Group */}
        <div>
          <Button color="success" onClick={this.showToggle}>
            InsertUser
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.showToggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.showToggle}>Insert user to group</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                onChange={this.handleEmailUser}
                value={this.state.emailUser}
                name="group"
                id="group"
                placeholder="with email user"
                style = {{marginBottom: '10px'}}
              />
               <Input
                type="text"
                onChange={this.handleIdGroup}
                value={this.state.idGroup}
                name="group"
                id="group"
                placeholder="with id group"
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="danger" onClick={this.insertUserToGroup}>
                Add
              </Button>{" "}
              <Button color="secondary" onClick={this.showToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    admin: state.admin,
    group: state.group,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SearchEmail: email => dispatch(actions.SearchAction(email)),
    getListAction: name => dispatch(actionGroup.getListAction(name)),
    insertUserToGroup: (email,id) => dispatch(actionUser.insertUserToGroup(email,id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
