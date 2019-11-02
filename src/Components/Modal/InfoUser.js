import React, { Component } from 'react'
import _ from 'lodash'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
export default class InfoUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const {admin} = this.props
    return (
      <div className="info-user-detail">
      <i onClick={this.toggle} class="fas fa-book-open"></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Information User</ModalHeader>
          <ModalBody >
          {
          _.map(admin, (item,key) => {
            return (
            <ul key={item._id} style={{listStyle:'none'}}>
            <li>ID: {item._id}</li>
            <li>Email: {item.email}</li>
            <li>Name: {item.name}</li>
            <li>Gender: {item.gender}</li>
            <li>Birthdate: {item.birthdate}</li>
          </ul>
            )
          })
        }
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
