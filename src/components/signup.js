import React from 'react';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

const BASE_URL = 'http://localhost:3000/users'

class Signup extends React.Component {
  
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }
  
  handleInput = (ev) => {
    const {name, value} = ev.target
    console.log(ev.target.value)
    this.setState({
      [name]: value
    })
  } //handleInput

  handleSubmit = (ev) => {
    //create a request object we can pass through to knock
    const request = {'email': this.state.email, 'password': this.state.password}

    //do an axios post request where we can send through the user details to rails and login
    axios.post(`${BASE_URL}/new`, {auth: request})
    .then(result => {
      localStorage.setItem("jwt", result.data.jwt)
      console.log("Signup", result.data)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.jwt;
      this.props.setCurrentUser();
      this.props.history.push('/animals');
    })
    .catch(err => {
      console.warn(err)
    })
    ev.preventDefault();
  }

 

  
  render(){
    return(
      <div className='form-box'>
        <form onSubmit={this.handleSubmit}>
          <label className='title'>Signup</label>
          <br/>

          <input
            onChange={this.handleInput}
            name="first_name"
            type="firstname"
            // value="steven@ga.co"
            placeholder='Enter name'
            />
          <br/>

          <input
            onChange={this.handleInput}
            name="last_name"
            type="lastname"
            // value="steven@ga.co"
            placeholder='Enter name'
            />
          <br/>

          <input
            onChange={this.handleInput}
            
            name="email"
            type="email"
            // value="steven@ga.co"
            placeholder='Enter Email'
            />
          <br/>
          <input
            onChange={this.handleInput}
            name="password"
            type="password"
            // value="chicken"
            placeholder='Enter Password'
            />
          <br/>
          <button>Signup</button>
        </form>
      </div>

    ); // return
  }// render
}

export default Signup;