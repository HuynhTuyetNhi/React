import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import FormDescript from "./FormDescript";
import ModalLog from "../Modal/ModalLog";
import "../Task/assets/style.css";
import _ from "lodash";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap";
export default class DescriptTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      email: ''
    };
    this.showInputAssign = this.showInputAssign.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.assignTask = this.assignTask.bind(this)
  }
  AddFlag(idActive) {
    this.props.AddFlagIssueAct(idActive);
  }
  RemoveFlag(idActive) {
    this.props.RemoveFlag(idActive);
  }
  showInputAssign() {
    this.setState(preState => ({
      status: !preState.status
    }));
  }
  onChangeEmail(event){
    event.preventDefault();
    this.setState({
      email: event.target.value
    })
  }
  componentDidUpdate(preState){
    if(this.state.status === false){
      !_.isEqual(preState.data.admin, this.props.admin) && this.tranferDataToAssign()
    }
  }
  tranferDataToAssign(){
    const {data} = this.props
    _.map(this.props.admin, item => {
      this.props.assignTaskIssueAct(data._id,item._id)
    })
  }
  assignTask(e){
    e.preventDefault()
    this.props.findUserLikeEmail(this.state.email)
    this.setState(preState => ({
      status: !preState.status
    }))
  }
  render() {
    const { data } = this.props;
    const { user, admin } = this.props;
    const { status } = this.state;
    return (
      <div className="descriptWork">
        <div className="list-item-right dropdown">
          <div>
            <h2>
              WORKJIRA /
              <span>
                {data.name}{" "}
                <div className="chooseOptionEdit">
                  <UncontrolledDropdown>
                    <DropdownToggle className="custom-issue" caret>
                      <i class="icon fas fa-ellipsis-h"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => this.AddFlag(data._id)}>
                        Add Flag
                      </DropdownItem>
                      <DropdownItem onClick={() => this.RemoveFlag(data._id)}>
                        Move Flag
                      </DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </span>
            </h2>
            {/* <FormDescript description={data.descript} /> */}
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                value={data.descript}
              />
            </FormGroup>
            <div className="container modal-log-work">
              <a href="#" data-toggle="modal" data-target="#myModal1">
                Log Work
              </a>
              <ModalLog />
            </div>
            <div className="detail-work-task">
              <h4>Details</h4>
              <div className="row">
                <div className="text-detail col-md-2">
                  <ul className="item-detail-left">
                    <li>Status:</li>
                    <li>Prioriry:</li>
                    <li>Label:</li>
                    <li>Epic:</li>
                    <li>Type:</li>
                  </ul>
                </div>
                <div className="text-detail col-md-10">
                  <ul className="item-detail-right">
                    <li>Open</li>
                    <li>{data.priority}</li>
                    <li>None</li>
                    <li>Form Search</li>
                    <li>{data.type}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detail-work-task">
              <h4>People</h4>
              <div className="row">
                <div className="text-detail col-md-2">
                  <ul className="item-detail-left">
                    <li>Reporter:</li>
                    <li>Assignee:</li>
                  </ul>
                </div>
                <div className="text-detail col-md-10">
                  <ul className="item-detail-right">
                    {/* {this.findUserLikeID(data.repoter)} */}
                    <li>
                      {_.map(user, (item, key) => {
                        if (item._id === data.repoter) {
                          return item.name;
                        }
                      })}
                    </li>
                    <li>
                      <span>
                        {
                          _.map(admin,(item,key)=> {
                           return <span>{item.name}</span>
                          })
                        }
                        <i
                          onClick={this.showInputAssign}
                          class="fas fa-pen"
                        ></i>
                      </span>
                    </li>
                    {status && (
                     <div className="input-assign">
                     <InputGroup>
                        <Input value ={this.state.email} onChange={this.onChangeEmail} />
                        <InputGroupAddon addonType="append">
                          <Button onClick={this.assignTask} color="secondary">Assign</Button>
                        </InputGroupAddon>
                      </InputGroup>
                     </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="detail-work-task">
              <h4>Description</h4>
              <FormGroup>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  value={data.descript}
                />
              </FormGroup>
            </div>
            <div className="detail-work-task">
              <h4>Comment</h4>
              There are no comments yet on this issue
              <p></p>
              <FormGroup>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </div>
            <div className="detail-work-task">
              <h4>Attachments</h4>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
