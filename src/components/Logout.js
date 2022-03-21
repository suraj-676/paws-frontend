import React from 'react';
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom';

import Login from './components/Login'
import MyProfile from './components/MyProfile'


const BASE_URL = 'http://localhost:3000'

class Logout extends React.Component{

    //App state
    state = {
        currentUser: ''
    }
  
    //function to run on component mounting
    componentDidMount(){
        this.setCurrentUser();
    }
  
    //function to set the state to the current logged in user
    setCurrentUser = () => {
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`${BASE_URL}/users/current`, {
          headers: {
            'Authorization': token
          }
        })
        .then(res => {
          this.setState({currentUser: res.data})
        })
        .catch(err => console.warn(err))
    }
  
    //function to log the user out.
    handleLogout = () => {
        this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;
    }
  
    render(){
      return (
        
            <Router>
              <header>
                <nav>
                  {/* Show one of two nav bars depending on if the user is logged in */}
                    {
                      this.state.currentUser !== undefined
                      ?
                      (
                        <ul>
                          <li>Welcome {this.state.currentUser.name} | </li>
                          <li><Link to='/my_profile'>My Profile</Link></li>
                          <li><Link onClick={this.handleLogout} to='/'>Logout</Link></li>
                        </ul>
                      )
                      :
                      (
                        <ul>
                          <li><Link to='/login'>Login</Link></li>
                        </ul>
                      )
                    }
                </nav>
                <hr/>
              </header>
              <Route exact path='/my_profile' component={MyProfile}/>
              <Route
                exact path='/login'
                render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}
                />
            </Router>
          );// return
   
    } // render
  } //class App
export default Logout;