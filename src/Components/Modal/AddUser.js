import React, { Component } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Button
}
from "reactstrap"
import * as actions from "../../Store/actions/project";
import { connect } from "react-redux";
export default class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      emailUser: '',
      positionUser:''
    }
    this.showToggle = this.showToggle.bind(this)
    this.handleEmailUser = this.handleEmailUser.bind(this)
    this.handlePostionUser = this.handlePostionUser.bind(this)
    this.addUser = this.addUser.bind(this)
  }
  showToggle(){
    this.setState(preState => ({
      modal: !preState.modal
    }))
  }
  handleEmailUser(e){
    e.preventDefault()
    this.setState({
      emailUser: e.target.value
    })
  }
  handlePostionUser(e){
    e.preventDefault()
    this.setState({
      positionUser: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
        <Button color="#caa" onClick={this.showToggle}>
        <i class="fas fa-plus"></i> Add User
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.showToggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.showToggle}>
            Insert user
          </ModalHeader>
          <ModalBody>
          <label>Email: </label>
          <Input type="text" onChange={this.handleEmailUser} value={this.state.emailUser} name="email" id="email" placeholder="with email user" />
          <label>Position: </label>
          <Input type="text" onChange={this.handlePostionUser} value={this.state.positionUser} name="position" id="position" placeholder="with position user" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.addUser}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.showToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    )
  }
}
