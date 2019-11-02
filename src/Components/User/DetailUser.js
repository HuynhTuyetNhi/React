import React, { Component, Fragment } from "react";
import { Table } from "reactstrap";
import _ from "lodash";
class DetailUser extends Component {
  render() {
    const { admin } = this.props.admin;
    console.log('admin',admin);
    return (
      <div className="detailUser">
        <div>
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Image</th>
                <th>DateCreated</th>
                <th>IdGroup</th>
              </tr>
            </thead>
            <tbody>
              {(_.has(admin, "error") && (
                <tr>
                  <td>Not Found User</td>
                </tr>
              )) ||
                _.map(admin, (item, key) => {
                  return (
                    <Fragment>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.image}</td>
                        <td>{item.datecreate}</td>
                        <td>{item.idgroup}</td>
                      </tr>
                    </Fragment>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default DetailUser;
