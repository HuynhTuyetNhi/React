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
class CreateProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      nameProject: ''
    }
    this.showToggle = this.showToggle.bind(this)
    this.handleNameProject = this.handleNameProject.bind(this)
    this.createProject = this.createProject.bind(this)
  }
  showToggle(){
    this.setState(preState => ({
      modal: !preState.modal
    }))
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
  render() {
    return (
      <div>
        <Button color="#caa" onClick={this.showToggle}>
        <i class="fas fa-plus"></i> Create project
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.showToggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.showToggle}>
            Create project
          </ModalHeader>
          <ModalBody>
          <Input type="text" onChange={this.handleNameProject} value={this.state.nameProject} name="project" id="project" placeholder="with name project" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.createProject}>
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
    project: state.project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProjectAct : name => dispatch(actions.createProjectAct(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);

