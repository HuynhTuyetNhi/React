import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "../User/assets/style.css";
import * as action from "../../Store/actions/auth";
import { connect } from "react-redux";
import _ from 'lodash'
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      avatar: this.props.data.image,
      gender: this.props.data.gender,
      birthday: this.props.data.birthdate
    };
    this.handleAvatar = this.handleAvatar.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.activeId = ''
  }
  handleAvatar(e) {
    e.preventDefault();
    console.log(e.target.files[0])
    this.setState({
      avatar: e.target.files[0]
    });
  }
  handleGender(e) {
    e.preventDefault();
    this.setState({
      gender: e.target.value
    });
  }
  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }
  handleBirthday(e) {
    e.preventDefault();
    this.setState({
      birthday: e.target.value
    });
  }
  handleSave(e) {
    e.preventDefault();
    let data = new FormData()
    data.append('avatar',this.state.avatar)
    data.append('gender',this.state.gender)
    data.append('name',this.state.name)
    data.append('birthdate',this.state.birthday)
    this.props.EditUserAction(this.activeId, data);
  }
  render() {
    // const props = this.props;
    const admin = this.props.admin
      _.map(admin, (item) => {
        this.activeId = item._id
      })
    console.log(this.props.data)
    return (
      <div>
        <div className="container">
          <i data-toggle="modal"
            data-target="#myModal" className="fas fa-cog"></i> Setting user
          {/* The Modal */}
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Update User</h4>
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
                        <Label for="avatar">Avatar</Label>
                        <Input
                          type="file"
                          name="avatar"
                          onChange={this.handleAvatar}
                          id="avatar"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input
                          type="text"
                          name="text"
                          id="gender"
                          onChange={this.handleGender}
                          value={this.state.gender}
                          required
                          placeholder="gender placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="day">Birthday</Label>
                        <Input
                          type="text"
                          name="text"
                          id="day"
                          onChange={this.handleBirthday}
                          value={this.state.birthday}
                          required
                          placeholder="birthday placeholder"
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
const mapStateToProps = state => {
  return {
    user: state.user,
    admin: state.admin,
    project: state.project
  };
}
const mapDispatchToProps = dispatch => {
  return {
    EditUserAction: (id, user) => dispatch(action.EditUserAction(id, user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUser);
