import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Animals from './components/Animals'
import AnimalsShow from './components/AnimalShow'
import Donations from './components/Donations'
import Login from './components/Login'
import axios from 'axios'
import Signup from './components/Signup'

// import MyProfile from './MyProfile'



// import Services from './components/Services';
// import SignIn from './components/SignIn';
// import ContactUs from './components/ContactUs';
// import SignUp from './components/SignUp';
// import Marketing from './components/Marketing';
// import Consulting from './components/Consulting';
const BASE_URL = "http://localhost:3000";
class App extends React.Component {

  //App state
  state = {
    currentUser: {},
    headerSet: false,
  };

  //function to run on component mounting
  componentDidMount() {
    this.setCurrentUser();
  }

  //function to set the state to the current logged in user
  setCurrentUser = () => {
    let token = localStorage.getItem("jwt");
    if (token) {
    console.log(token)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      this.setState({headerSet: true})
      // axios.get(`${BASE_URL}/users/current`)
      // .then((res) => {
      //   this.setState({ currentUser: res.data });
      // })
      // .catch((err) => console.warn(err));

    }
    
  };

  //function to log the user out.
  handleLogout = () => {
    this.setState({ currentUser: undefined });
    localStorage.removeItem("jwt");
    axios.defaults.headers.common["Authorization"] = undefined;
  };

  render() {

    if (this.state.headerSet === false) {
      return <p>Loading...</p>
    }

    return (
    <Router>
      

      <div>
      <Route path='/'  component={Navbar} />

      {/* <Route path='/services' component={Services} /> */}
      {/* <Route path='/contact-us' component={ContactUs} />
      <Route path='/marketing' component={Marketing} />
      <Route path='/consulting' component={Consulting} /> */}
      <Route exact path='/animals' component={Animals} />
      <Route exact path='/donation' component={Donations} />
      <Route exact path='/animals/:id' component={AnimalsShow} />
      <Route exact path='/signup' component={Signup} />

      {/* <Route exact path='/my_profile' component={MyProfile}/> */}
      <Route
        exact
        path="/login"
        render={(props) => (
          <Login setCurrentUser={this.setCurrentUser} {...props} />
        )}
      />
      </div>
     </Router>
    );
  } // render

    
 
} // class Home

export default App;
