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
import * as actions from "../../Store/actions/sprint";
import { connect } from "react-redux";
class CreateSprint extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      nameSprint: ''
    }
    this.showToggle = this.showToggle.bind(this)
    this.handleNameSprint = this.handleNameSprint.bind(this)
    this.createSprint = this.createSprint.bind(this)
  }
  showToggle(){
    this.setState(preState => ({
      modal: !preState.modal
    }))
  }
  handleNameSprint(event){
    event.preventDefault();
    this.setState({
      nameSprint : event.target.value
    })
  }
  createSprint(event){
    event.preventDefault();
    const {params} = this.props
    this.props.createSprintAct(this.state.nameSprint, params)
  }
  render() {
    return (
      <div>
      <Button  onClick={this.showToggle} style={{float: 'right', marginTop:'-65px', marginRight:'-142px'}} color="warning" >create sprint</Button>
        {/* <Button color="#caa" onClick={this.showToggle}>
        <i class="fas fa-plus"></i> Create project
        </Button> */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.showToggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.showToggle}>
            Create sprint
          </ModalHeader>
          <ModalBody>
          <label>Name Sprint</label>
          <Input type="text" onChange={this.handleNameSprint} value={this.state.nameSprint} name="sprint" id="sprint" placeholder="with name sprint" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.createSprint}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.showToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    sprint: state.sprint
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createSprintAct : (name, id) => dispatch(actions.createSprintAct(name, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSprint);

