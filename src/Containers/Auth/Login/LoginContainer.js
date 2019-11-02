import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/auth';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../../../Components/Auth/Login/Login'
class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      redirect: false
    }
  }
  componentWillUpdate(nextProps){
    console.log(nextProps)
    if(nextProps.user.code === 'ok'){
      this.setState({
        redirect: true
      })
    }
  }
  haveRedirect(){
    if(this.state.redirect === true){
      return <Redirect to="/user" />
    }
  }
  render() {
    return (
      <div>
      <Login email={this.props.email} password={this.props.password} login={this.props.login} />
      {this.haveRedirect()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      email: state.auth.email,
      password: state.auth.password,
      id: state.auth.id,
      error: state.auth.error,
      user : state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
      login: (email, password) => dispatch( actions.loginAction(email, password) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(LoginContainer)
