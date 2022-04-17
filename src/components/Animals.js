import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './animalindex.css';
import AnimalShow from './AnimalShow';
import './animalindex.css';
import '../App.css';




// import { cld } from '../config/index'
// import { Cloudinary } from "@cloudinary/url-gen";




const BASE_ANIMALS_URL = 'http://localhost:3000/animals';
// state to tell react that component and its children re rendered
class Animals extends React.Component {
    state = {
      description: '',
      error: null,
      loading: true,
      animals: [],
       
    };



    componentDidMount(){
        this.fetchAnimals();
    
    }

    fetchAnimals = async () => {
        this.setState({ loading: true});

        try{
            const res = await axios.get(BASE_ANIMALS_URL);
        
            console.log(res.data);
            this.setState({
                animals: res.data,
                loading: false
            });
            console.log('CHECK THIS response', res.data);
        } catch (err) {
            console.log('Error loading AJAX', err);
            this.setState({ error: err, loading: false })
            }
    }

  render(){
    const { loading, error, animals } = this.state
    // console.log('image', animals.map(p => cld.image(a.image)));
    // console.log("CHECK Render Animal", this.state)
    if (error) {
      return <p>Error loading</p>
    }

    return (
      <div className="animalsList">
        {
          animals.map(a =>
            <li className='animalIndex' key={a.id}>
              <Link to={`/animals/${a.id}`}>
              <strong>Name</strong>
              <br></br>
              <strong> {a.name} </strong>
             <br></br>
             
             <img className="img_tag" src={a.image_url} />
        

        </Link>
             
              <br />
            </li>
          )
        }
         
            </div>
      

      
    );
  }



      
} // class Animals

export default Animals;

             
             
                
              

           

