import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Animals from './components/Animals'
import AnimalsShow from './components/AnimalShow'
import Donations from './components/Donations'
import Login from './components/Login'


// import Services from './components/Services';
// import SignIn from './components/SignIn';
// import ContactUs from './components/ContactUs';
// import SignUp from './components/SignUp';
// import Marketing from './components/Marketing';
// import Consulting from './components/Consulting';

function App() {
  return (
    <Router>
      

      <div>
      <Route path='/'  component={Navbar} />
      {/* <Route path='/services' component={Services} /> */}
      {/* <Route path='/contact-us' component={ContactUs} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/marketing' component={Marketing} />
      <Route path='/consulting' component={Consulting} /> */}
      <Route exact path='/animals' component={Animals} />
      <Route exact path='/donation' component={Donations} />
      <Route exact path='/animals/:id' component={AnimalsShow} />
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
}

export default App;
