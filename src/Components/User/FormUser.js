import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../User/assets/style.css'
class FormUser extends Component {
  constructor(props){
    super(props);
    this.state ={
      email: '',
      pass: '',
      name: '',
      gender: '',
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGender = this.handleGender.bind(this);
  }
  handleEmail(e){
    e.preventDefault();
    this.setState({
      email: e.target.value
    })
    console.log(this.state.email)
  }
  handlePass(e){
    e.preventDefault();
    this.setState({
      pass: e.target.value
    })
  }
  handleName(e){
    e.preventDefault();
    this.setState({
      name: e.target.name
    })
  }
  handleGender(e){
    e.preventDefault();
    this.setState({
      gender: e.target.gender
    })
  }

  render() {
    const {email,pass,nameUser,gender} = this.state
    return (
      <div className="form-user">
         <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" email={email} value ={this.state.email} onChange={this.handleEmail} id="email" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" pass={pass} onChange={this.handlePass} value = {this.state.pass} id="pass" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="text" id="name" nameUser={nameUser} onChange={this.handleName} value={this.state.name} placeholder="name placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input type="text" name="text" id="gender" gender={gender} onChange={this.handleGender} value ={this.state.gender} placeholder="gender placeholder" />
        </FormGroup>
        </Form>
      </div>
    )
  }
}
export default FormUser
