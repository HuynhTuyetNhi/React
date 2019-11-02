import React, { Component } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/issues";
class ListIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameIssues: "",
      typeIssues:"",
      modalIssues: false,
      activeTab: "1"
    };
    this.createIssues = this.createIssues.bind(this);
    this.showToggleIssues = this.showToggleIssues.bind(this);
    this.handleNameIssues = this.handleNameIssues.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleTypeIssues = this.handleTypeIssues.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  showToggleIssues() {
    this.setState(preState => ({
      modalIssues: !preState.modalIssues
    }));
  }
  handleNameIssues(e) {
    e.preventDefault();
    this.setState({
      nameIssues: e.target.value
    });
  }
  handleTypeIssues(e){
    e.preventDefault();
    this.setState({
      typeIssues: e.target.value
    })
  }
  createIssues(e) {
    e.preventDefault();
    const {nameIssues, typeIssues} = this.state
    this.props.createIssuesAct(this.props.params, nameIssues, typeIssues);
  }
  render() {
    // const { match: { params: { id } } } = this.props
    // console.log(id)
    return (
      <div>
        <div className="issues-task">
          <Button
            data-toggle="collapse"
            data-target="#demo3"
            color="#caa"
            onClick={this.showToggleIssues}
          >
            create issues
          </Button>
        </div>
        <div id="demo3" className="collapse">
          <div>
            <Modal
              isOpen={this.state.modalIssues}
              toggle={this.showToggleIssues}
              className={this.props.className}
            >
              <ModalHeader toggle={this.showToggleIssues}>
                Create Issues
              </ModalHeader>
              <ModalBody>
                <label name="name">Name Issue</label>
                <Input
                  type="text"
                  onChange={this.handleNameIssues}
                  value={this.state.nameIssues}
                  style={{ marginBottom: "10px" }}
                  name="issue"
                  id="issue"
                  placeholder="with name issue"
                />
                <label name="tyoe">Type</label>
                <Input
                  type="select"
                  name="selectMulti"
                  id="exampleSelectMulti"
                  value={this.state.typeIssues}
                  onChange={this.handleTypeIssues}
                >
                  <option value="bug">Bug</option>
                  <option value="task">Task</option>
                </Input>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                  onClick={this.createIssues}
                >
                  Add
                </Button>{" "}
                <Button color="secondary" onClick={this.showToggleIssues}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    project: state.project,
    issues : state.issue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createIssuesAct: (id, name, type) => dispatch(actions.createIssuesAct(id, name, type))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIssues);
