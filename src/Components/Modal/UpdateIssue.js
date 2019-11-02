import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "../User/assets/style.css";
// import * as action from "../../Store/actions/issues";
import { connect } from "react-redux";
import _ from 'lodash'
class UpdateIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      avatar: this.props.data.image,
      priority: this.props.data.priority,
      process: this.props.data.process,
      type:this.props.data.type,
      descript: this.props.data.descript,
      tag: this.props.data.tag,
    };
    this.handleAvatar = this.handleAvatar.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescript = this.handleDescript.bind(this);
    this.handleProcess = this.handleProcess.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.activeId = ''
  }
  handleDescript(e){
    e.preventDefault();
    this.setState({
      descript: e.target.value
    })
  }
  handleProcess(e){
    e.preventDefault();
    this.setState({
      process: e.target.value
    })
  }
  handleAvatar(e) {
    e.preventDefault();
    console.log(e.target.files[0])
    this.setState({
      avatar: e.target.files[0]
    });
  }
  handleType(e) {
    e.preventDefault();
    this.setState({
      type: e.target.value
    });
  }
  handleTag(e){
    e.preventDefault();
    this.setState({
      tag: e.target.value
    })
  }
  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }
  handlePriority(e) {
    e.preventDefault();
    this.setState({
      priority: e.target.value
    });
  }
  handleSave(e) {
    e.preventDefault();
    let data = new FormData()
    data.append('image',this.state.avatar)
    data.append('name',this.state.name)
    data.append('type',this.state.type)
    data.append('priority',this.state.priority)
    data.append('descript',this.state.descript);
    data.append('process', this.state.process)
    data.append('tag', this.state.tag)
    this.props.EditIssuesAct(this.activeId, data)
  }
  componentWillReceiveProps(prevProps){
    !_.isEqual(prevProps.data, this.props.data) && this.handleTranferData(prevProps.data)
  }
  handleTranferData =(data) => {
    // const {data} = this.props
    this.setState({
      name: data.name, 
      type: data.type,
      process: data.process,
      tag: data.tag,
      descript: data.descript,
      priority: data.priority,
      avatar: data.avatar
    })
  }
  render() {
    const {params} = this.props
    const {data} = this.props
    this.activeId = params
    return (
      <div>
        <div className="container">
          {/* <i data-toggle="modal"
            data-target="#myModal" className="fas fa-cog"></i> */}
          <div className="modal" id="myModal" >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Update Issues</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="form-user">
                    <Form ref={el => (this.form = el)} onSubmit={this.handleSave}>
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                          type="text"
                          name="text"
                          value={this.state.name}
                          onChange={this.handleName}
                          id="name"
                          required
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="priority">Priority</Label>
                        <Input
                          type="text"
                          name="priority"
                          onChange={this.handlePriority}
                          value={this.state.priority}
                          id="priority"
                          // required
                          placeholder="priority placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="gender">Process</Label>
                        <Input
                          type="text"
                          name="text"
                          id="process"
                          onChange={this.handleProcess}
                          value={this.state.process}
                          required
                          placeholder="process placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="text">Type</Label>
                        <Input
                          type="text"
                          name="text"
                          id="text"
                          onChange={this.handleType}
                          value={this.state.type}
                          required
                          placeholder="type placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="text">Tag</Label>
                        <Input
                          type="text"
                          name="text"
                          id="text"
                          onChange={this.handleTag}
                          value={this.state.tag}
                          required
                          placeholder="type placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="text">Description</Label>
                        <Input
                          type="text"
                          name="text"
                          id="description"
                          onChange={this.handleDescript}
                          value={this.state.descript}
                          required
                          placeholder="descript placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="text">Avatar</Label>
                        <Input
                          type="file"
                          name="text"
                          id="avatar"
                          onChange={this.handleAvatar}
                          // value={this.state.avatar}
                          // required
                          // placeholder="avatar placeholder"
                        />
                      </FormGroup>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-success">
                          Save
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateIssue
// const mapStateToProps = state => {
//   return {
//    issues: state.issue
//   };
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     EditIssuesAct: (id, data) => dispatch(action.EditIssuesAct(id, data))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UpdateIssue);
