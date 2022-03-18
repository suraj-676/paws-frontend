import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import './animalshow.css'





const BASE_ANIMALS_URL = "http://localhost:3000/animals/";


class AnimalsShow extends React.Component {


    state = {
        resultsAnimal: {},
        error: null,
        loading: true,
        status: ''

    }
    componentDidMount() {
        this.revealAnimal();

    }

    revealAnimal = async () => {
        this.setState({ loading: true });
        try {
            const res = await axios.get(`http://localhost:3000/animals/${this.props.match.params.id}`);
            console.log('RES.DATA response', res.data);
            this.setState({
                resultsAnimal: res.data,
                loading: false , // stop showing loading message
            });

        } catch (err) {
            console.log('Error in search AJAX: ', err);
            this.setState({ error: err, loading: false });
        }

        

    };//revealAnimals()

    handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('handleSubmit()', this.state.resultsAnimal.id)

        try {
            const res = await axios.post(`http://localhost:3000/adoption/${this.state.resultsAnimal.id}`);
            this.setState({status: "pending"})
            console.log(this.state.status);
            //this.props.history.push(`status/`)
            //  this.setState.apply({status: "approved"})

            
            //console.log('SHOW ANIMALS DATA', res.data );

        } catch (err) {
            console.log('Error in search AJAX:', err);
        }
        
    }//add to cart  handleSubmit


    render() {
        
        if (this.state.loading === true){
            return <h2>Loading Animal...</h2>
        }

       

        const { name, description, breed, species, image_url  } = this.state.resultsAnimal;

        console.log('SEE IMAGE', this.state.resultsAnimal)
        
        // const {loading, error, resultsProduct} = this.state
        // console.log("resultsProduct", this.state.resultsProduct.name)
        if (this.state.error) {
            return <p>Error loading</p>
        }
        
        


        return (

            
        

            <div className='showAnimal'>

            <img src={image_url}></img>
           
            {name}
            <br></br>
            {description}
            <br></br>
            {species}
            <br></br>
            {breed}
            <br></br>
            <form onSubmit={this.handleSubmit}>
                    <button type="submit" className='addButton'>Adoption</button>
                </form>
            
                {this.state.status}
            

            
                
              
                
            </div>


        )//return()




    } //render()



};// AnimalShow class

export default AnimalsShow



