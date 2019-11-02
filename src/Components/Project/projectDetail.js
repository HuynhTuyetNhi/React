import React, { Component } from "react";
import _ from "lodash";
import { Card, CardBody, CardTitle, CardSubtitle, Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
// import { AddMemberAct } from "../../Store/actions/project";
export default class projectDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      emailUser: '',
      positionUser:'',
      // idUser: '',
      // userAdd : [],
    }
    this.showToggle = this.showToggle.bind(this)
    this.handleEmailUser = this.handleEmailUser.bind(this)
    this.handlePostionUser = this.handlePostionUser.bind(this)
    // this.addUser = this.addUser.bind(this)
    this.handleIdProject = ''
    this.hanleUserActive = ''
  }
  fomatDateTime(date) {
    return _.slice(_.replace(date, /-/g, "/"), 0, 10);
  }
  addUser =(idproject)=> {
    this.props.findUserEmail(this.state.emailUser)
    this.handleIdProject = idproject
    console.log(this.handleIdProject)
    // const userAdd = {_id:this.hanleUserActive, position: this.state.positionUser}
    // console.log(userAdd)
    // this.props.AddMemberAct(idproject,userAdd)
  }
  componentDidUpdate(preState){
    console.log(preState.member, this.props.member)
    !_.isEqual(preState.member, this.props.member) && this.handleAdd(this.props.member)
  }
  handleAdd(member){
    const userAdd = {_id:member[0]._id, position: this.state.positionUser}
    this.props.AddMemberAct(this.handleIdProject,userAdd)
  }
  showToggle(id){
    this.handleIdProject = id
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
    const { project } = this.props;
    // this.hanleUserActive = this.props.admin
    // console.log(this.hanleUserActive)
    _.map(this.props.member, (item) => {
      this.hanleUserActive = item._id
    })
    console.log(this.hanleUserActive)
    return (
      <div>
        {_.map(project, item => {
          return (
            <Card>
              <div className="detail-task-user">
                <CardBody style={{ background: "#A4D4FF" }}>
                  <i
                    onClick={ this.showToggle.bind(this, item._id) }
                    style={{ float: "right" }}
                    class="fas fa-user-plus"
                  ></i>
                  <CardTitle>{item.name}</CardTitle>
                  <CardSubtitle>
                    Create day: {this.fomatDateTime(item.datecreate)}
                  </CardSubtitle>
                  <Button style={{ background: "#41ACF2", marginTop: "20px" }}>
                    {" "}
                    <Link to={{ pathname: `/backlog/${item._id}` }}>
                      <span>View</span>
                    </Link>
                  </Button>
                </CardBody>
                <div>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={ this.showToggle.bind(this, item._id) }
                    className={this.props.className}
                  >
                    <ModalHeader toggle={this.showToggle}>
                      Insert user
                    </ModalHeader>
                    <ModalBody>
                      <label>Email: </label>
                      <Input
                        type="text"
                        onChange={this.handleEmailUser}
                        value={this.state.emailUser}
                        name="email"
                        id="email"
                        placeholder="with email user"
                      />
                      <label>Position: </label>
                      <Input
                        type="text"
                        onChange={this.handlePostionUser}
                        value={this.state.positionUser}
                        name="position"
                        id="position"
                        placeholder="with position user"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="submit"
                        color="primary"
                        onClick={this.addUser.bind(this, item._id)}
                      >
                        Add
                      </Button>{" "}
                      <Button color="secondary" onClick={this.showToggle.bind(this, item._id)}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}
