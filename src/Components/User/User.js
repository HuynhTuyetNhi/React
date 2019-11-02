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
  Col
} from "reactstrap";
import ListUser from "./ListUser";
import * as action from "../../Store/actions/user";
import { connect } from "react-redux";
import _ from "lodash";
class User extends Component {
  constructor(props) {
    super(props);
    this.listUserAttendProject = [];
  }
  render() {
    const { listUser, user } = this.props;
    _.map(user, (data, index) => {
      _.map(listUser, (item, index1) => {
        if (data._id === item.id) {
          return this.listUserAttendProject.push(data);
        }
      });
    });
    return (
      <div className="user-list">
        <Nav tabs>
          {_.map(this.listUserAttendProject, (listUser, key) => {
            return (
              <NavItem>
                <NavLink>{listUser.name}</NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    findUserLikeIDAct: id => dispatch(action.findUserLikeIDAct(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
