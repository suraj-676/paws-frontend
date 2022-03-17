import React from 'react';
import axios from 'axios';


const BASE_ADOPTION_URL = 'http://localhost:3000/animals';

class Adoption extends React.Component {
    state = {
      
      error: null,
      loading: true,
      adoption: [],
       
    };

    componentDidMount(){
        this.fetchAdoptions();
    
    }
