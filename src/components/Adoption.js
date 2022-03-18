// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const BASE_ANIMALS_URL = 'http://localhost:3000/adoption';

// class Adoption extends React.Component {
//     state = {
//       error: null,
//       loading: true,
//       adoption: [],
       
//     };



//     componentDidMount(){
//         this.fetchAdoption();
    
//     }

//     fetchAdoption = async () => {
//         this.setState({ loading: true});

//         try{
//             const res = await axios.get(BASE_ANIMALS_URL);
        
//             console.log(res.data);
//             this.setState({
//                 adoption: res.data,
//                 loading: false
//             });
//             console.log('CHECK THIS response', res.data);
//         } catch (err) {
//             console.log('Error loading AJAX', err);
//             this.setState({ error: err, loading: false })
//             }
//     }

//   render(){
//     const { loading, error, adoption } = this.state
   
//     if (error) {
//       return <p>Error loading</p>
//     }

//     return (
//       <div className="adoptionList">
//         {
//           adoption.map(a =>
//             <li className='adoptionIndex' key={a.id}>
//               <Link to={`/adoption/${a.id}`}>
//               {/* <strong> {a.name} </strong>
//              <br></br>
//              <strong> {a.address} </strong>
//              <br></br> */}
//              <form onSubmit={this.handleSubmit}>

//              <label className='title'>Adoption</label>
//           <br/>

//           <input
//             onChange={this.handleInput}
//             name="name"
//             type="name"
//             placeholder='Enter Name'
//             />
//           <br/>
//           <input
//             onChange={this.handleInput}
//             name="address"
//             type="address"
//             placeholder='Enter Address'
//             />
//           <br/>
//           <input
//             onChange={this.handleInput}
//             name="phone"
//             type="phone"
//             placeholder='Enter Phone'
//             />
//           <button>Submit</button>
                    
//                 </form>
             

             
//              {/* <img className="img_tag" src={a.image_url} /> */}
        

//         </Link>
             

             
//               <br />
             
                
              

           
//             </li>
//           )
//         }
         
//             </div>
      

      
//     );
//   }



      
// } // class Animals

// export default Adoption;