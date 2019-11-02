/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { FormGroup, Label, Input } from 'reactstrap';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      name: '',
      avatar :'',
      gender:'female',
    }
  }
  handleChangeName =(event) =>{
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }
  handleChangeEmail =(event)=>{
    event.preventDefault();
    this.setState({
      email : event.target.value
    })
  }
  handleChangePass =(event)=>{
    event.preventDefault();
    this.setState({
      password : event.target.value
    })
  }
  handleChangeFile =(event) =>{
    console.log(event.target.value)
    event.preventDefault();
    this.setState({
      avatar: event.target.value
    })
  }
  handleChangeGender = (event) =>{
    console.log(event.target.value)
    event.preventDefault();
    this.setState({
      gender: event.target.value
    })
  }
  handleSubmit =(event)=>{
    event.preventDefault();
    const user = [{email:this.state.email, password:this.state.password,name: this.state.name,avatar:this.state.avatar,gender:this.state.gender}]
    console.log(user);
    this.props.Register(this.state.email,this.state.password,this.state.name,this.state.avatar,this.state.gender);
  }
  render() {
    return (
      <div className="registerPage">
      <div className="container form-register">
      <div className="img-register">
      </div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h3>Register <i className="icon-user fas fa-user-plus"></i></h3>
            <label htmlFor="name">Full name:</label>
            <input
              required
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Enter full name"
              name="fullname"
              maxLength='30'
              value={this.state.name}
              onChange= {this.handleChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              maxLength='30'
              minLength='9'
              value = {this.state.email}
              onChange = {this.handleChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              required
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              maxLength='30'
              minLength='5'
              onChange= {this.handleChangePass}
              value = {this.state.password}
              />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Avatar:</label>
            <input onChange={this.handleChangeFile} value={this.state.avatar} type="file" class="form-control-file"></input>
          </div>
          <div className="form-group gender">
          <FormGroup>
          <Label for="exampleSelect">Gender</Label>
          <Input type="select" name="select" value={this.state.gender} onChange={this.handleChangeGender} id="exampleSelect">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Input>
        </FormGroup>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" />
              Remember me
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit  <i class="fas fa-paper-plane"></i>
          </button>
          <p className="txtPass" ><Link to="/login">Have a account ?</Link> </p>
        </form>
      </div>
      </div>
    )
  }
}
  export default Register 