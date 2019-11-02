import React, { Component } from 'react'
import User from './User'
import { connect } from "react-redux";
import * as actions from '../../Store/actions/user'
import _ from 'lodash'
class ListUser extends Component {
  constructor(props){
    super(props)
    this.projectClone = []
    this.cloneUser = []
  }
  componentWillMount(){
    this.props.getListUserAct()
    this.getInfoProject()
    this.FilterUser()
  }
  getInfoProject(){
    const {params, project} = this.props
    _.map(project, (item, key)=> {
      if(item._id == params){
        return this.projectClone.push(item)
      }
    })
  }
  FilterUser(){
    _.map(this.projectClone, (data, key) => {
      _.map(data.idmembers, (member, index)=> {
          this.cloneUser.push(member)
      })
    })
  }
  render() {
    const {user} = this.props
    return (
      <div>
        <User listUser = {this.cloneUser} user={user}/>
        {/* {this.FilterUser()} */}
        {/* {this.getInfoProject()} */}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user : state.user,
    project: state.project
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getListUserAct: () => dispatch(actions.getListUserAct())
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (ListUser)
