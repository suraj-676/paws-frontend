import react from 'react';
import Animal from 'animal';
import axios from 'axios';



const BASE_PRODUCTS_URL = 'http://localhost:3000/animals';

class Animals extends React.Component {
    state = {
        animals: [],
        name: '',
        age: '',
        breed: '',
        species: '',
        description: '',
        sex: ''
    };

    componentDidMount(){
        this.fetchAnimals();
    
    }

    fetchAnimals = async () => {
        this.setState({ loading: true});

        try{
            const res = await axios.get(BASE_ANIMALS_URL)
        ;
      this.setState({
        animals: res.data,
        loading: false
      })
      console.log('check this array', this.state.animals)
      // console.log('CHECK THIS response', res.data);
    } catch (err) {
      console.log('Error loading AJAX', err);
      this.setState({ error: err, loading: false })
    }
  }

  render(){
    const { loading, error, animals } = this.state
    console.log('image', animals.map(p => cld.image(a.image)));
    // console.log("CHECK Render PRODUCT", this.state)
    if (error) {
      return <p>Error loading</p>
    }

    const animalsList = animals.map(a =>
        <li className='animalIndexLi' key={a.id}>
         <strong> {a.name} </strong>
          <br />
      
         
          
  
  
         
        </li>
      )
  }

      
}

