import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';





const BASE_DONATIONS_URL = "http://localhost:3000/donations"
class Donation extends React.Component {


   

    state = {
        name: '',

        address: '',
        amount: '',
        error: '',
        loading: '',
        donation: ''

    };

    

    handleInputAddress = (ev) => {
         console.log('input', ev.target.value);
        this.setState({ address: ev.target.value })
    }
    handleInputAmount = (ev) => {
         console.log('input', ev.target.value);
        this.setState({ amount: ev.target.value })
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('submit address', this.state);
        // this.fetchCart();
        //axios request to backend
        try{
            const donationRes = await axios.post(`http://localhost:3000/donations`, this.state)
            console.log('donation Create Response FOR ADDRESS', donationRes.data)
            this.setState({donation: donationRes.data});
          }catch(err){
            console.log('Error Creating Donation', err)
          }

    } //handleSubmit()

   

    render() {


        return (

             <div className='formField'>
            
             {/* <Donation hideEditControls={true} />  */}
                 {/* <h4 className='doName'>Donation Details:</h4> */}
                 {
                    //  this.state.adoption.id
                    // ?
                    <form onSubmit={this.handleSubmit}>
                        <strong>Credit Card Details</strong>
                        <br/>
                        <input className='donationTextfield' type="text" placeholder="Credit Card Details" onChange={this.handleCreditCardDetails}/>
                        <br/>
                        <strong>Expiry Date</strong>
                        <br/>
                        <input className='donationTextfield' type="text" placeholder="Expiry Date" onChange={this.handleExpiryDate}/>
                        <br/>
                        <strong>Enter Amount</strong>
                        <br></br>
                        <input className='donationTextfield' type="text" placeholder="Enter Amount" onChange={this.handleInputAmount}/>
                        <br/>

                        <strong>Enter Three Digit cvv</strong>
                        <br></br>
                        <input className='donationTextfield' type="text" placeholder="Enter Three Digit cvv" onChange={this.handle}/>
                        <br/>

                        <button className='buttonFinal'><strong>Donate For Paws</strong></button>
                
                    </form>   
                    
                    
                    // <form onSubmit={this.handleSubmit}>
                    //     <strong>Address</strong>
                    //     <br/>
                    //     <input className='donationTextfield' type="text" placeholder="address" onChange={this.handleInputAddress} />
                    //     <br /><br />
                    //     <button className='buttonFinal'>Finalise Payment</button>
                    //     <br/>

                    // </form>
                }
            

            </div>

        ) //return

    }//render()

}
export default Donation