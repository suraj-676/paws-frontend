import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';

const BASE_URL = "http://localhost:3000";
class Home extends React.Component {

    //App state
    state = {
      currentUser: {},
    };
  
    //function to run on component mounting
    componentDidMount() {
      this.setCurrentUser();
    }
  
    //function to set the state to the current logged in user
    setCurrentUser = () => {
      let token = "Bearer " + localStorage.getItem("jwt");
      axios
        .get(`${BASE_URL}/users/current`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          this.setState({ currentUser: res.data });
        })
        .catch((err) => console.warn(err));
    };
  
    //function to log the user out.
    handleLogout = () => {
      this.setState({ currentUser: undefined });
      localStorage.removeItem("jwt");
      axios.defaults.headers.common["Authorization"] = undefined;
    };
  
    render() {
      return (
        <div>
          <Router>
            <nav id="navbar">
              <div className="nav-wrapper ">
                {/* Show one of two nav bars depending on if the user is logged in */}
                  {
                    this.state.currentUser
                    ?
                    (
                      <ul>
                        <li>Welcome {this.state.currentUser.name} | </li>
                        <li><Link to='/animals'>Animal</Link></li>
                        <li><Link to='/donation'>Donation</Link></li>
                        <li><Link to='/services'>Cart</Link></li>
                        
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
                  </div>
              </nav>
              <Route path="/"  component={NavBar} />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          
          
          <Route path='/animals' component={Animals} />
          <Route path='/donations' component={Donations} />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
        </Router>

        <footer>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </footer>
      </div>
    );
  }
}
       

  
  
  export default Home;