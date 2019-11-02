import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input
} from "reactstrap";
import classnames from "classnames";
import "./assets/style.css";
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/epic'
import _ from 'lodash'
class MenuLog extends Component {
  constructor(props) {
    super(props);
    this.nameItem = null
    this.state = {
      activeTab: "1",
      modal: false,
      modalEpic: false,
      nameEpic: '',
      idProject: '',
      nameEpicEdit : this.nameItem
    };
    this.toggle = this.toggle.bind(this);
    this.showToggle = this.showToggle.bind(this);
    this.handleIdProject = this.handleIdProject.bind(this);
    this.handleNameEpic = this.handleNameEpic.bind(this);
    this.createEpic = this.createEpic.bind(this);
    this.showToggleEpic = this.showToggleEpic.bind(this)
    this.Editepic = this.Editepic.bind(this)
    this.handleNameEpicEdit = this.handleNameEpicEdit.bind(this);
    this.activeItem = null
  }
  createEpic(e){
    e.preventDefault();
    const Epic = {nameEpic: this.state.nameEpic, idProject: this.state.idProject}
    this.props.createEpic(Epic);
  }
  handleIdProject(e){
    e.preventDefault();
    this.setState({
      idProject: e.target.value
    })
  }
  handleNameEpic(e){
    e.preventDefault();
    this.setState({
      nameEpic: e.target.value
    })
  }

  showToggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  showToggleEpic(id, name){
    this.activeItem = id
    this.nameItem = name
    this.setState(prevState => ({
      modalEpic: !prevState.modalEpic,
    }));
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount(){
    this.props.viewListEpic(this.props.params)
}
  Editepic (e){
    e.preventDefault();
    this.props.EditepicAct(this.state.nameEpic, this.activeItem)
    this.showToggleEpic()
  }
  handleNameEpicEdit(e){
    e.preventDefault();
    this.setState({
      nameEpic : e.target.value
    })
  }
  render() {
    const epic = this.props.Epic
    return (
      <div className="show-epic">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Epic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Card body className="card-content-epic">
                  <CardTitle>
                    <span>Epic</span> <span><button className="btn btn-success" onClick={this.showToggle}>Create Epic</button></span>
                    <div>
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.showToggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.showToggle}>
                          Create Epic
                        </ModalHeader>
                        <ModalBody>
                        <Input type="text" onChange={this.handleNameEpic} value={this.state.nameEpic} style = {{ marginBottom: '10px'}} name="epic" id="ecpic" placeholder="with name ecpic" />
                        <Input type="text" onChange={this.handleIdProject} value={this.state.idProject}  name="Idproject" id="Idproject" placeholder="with name idproject" />
                        </ModalBody>
                        <ModalFooter>
                          <Button type="submit" color="primary" onClick={this.createEpic}>
                            Add
                          </Button>{" "}
                          <Button color="secondary" onClick={this.showToggle}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </CardTitle>
                  <Button
                    data-toggle="collapse"
                    data-target="#demo"
                    outline
                    color="warning"
                  >
                    All Epics
                  </Button>
                  <Button
                    data-toggle="collapse"
                    data-target="#demo1"
                    outline
                    color="warning"
                  >
                    All issues
                  </Button>
                  <div id="demo" className="collapse">
                  {
                    _.map(epic, (item, key) => {
                      if(key < 5){
                        return<tr style={{textAlign:'initial'}}><td  key={item.id}>{item.name} <i onClick={() => this.showToggleEpic (item._id, item.name)} style={{float:'right', marginLeft: '20px', marginTop:'-8px'}} className="fas fa-cog"></i></td></tr>
                      }
                    })
                  }
                  <div>
                      <Modal
                        isOpen={this.state.modalEpic}
                        toggle={this.showToggleEpic}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.showToggleEpic}>
                          Edit Epic
                        </ModalHeader>
                        <ModalBody>
                        <Input type="text" onChange={this.handleNameEpicEdit} value={this.nameEpic} style = {{ marginBottom: '10px'}} name="epic" id="ecpic1" placeholder="with name epic" />
                        </ModalBody>
                        <ModalFooter>
                          <Button type="submit" color="primary" onClick={this.Editepic}>
                            Edit
                          </Button>{" "}
                          <Button color="secondary" onClick={this.showToggleEpic}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    Epic: state.epic
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    createEpic: epic => dispatch(actions.createEpicAct(epic)),
    viewListEpic: (idProject) => dispatch(actions.viewListEpicAct(idProject)),
    EditepicAct : (nameEpic, id) => dispatch(actions.EditepicAct(nameEpic, id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuLog)
