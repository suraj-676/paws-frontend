import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';





const BASE_ORDER_URL = "http://localhost:3000"
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
        // console.log('input', ev.target.value);
        this.setState({ address: ev.target.value })
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

    handleCreditCard = async (ev) => {
        ev.preventDefault();
        console.log('submit credit card', this.state);
        try{
            const orderRes = await axios.patch(`http://localhost:3000/donations/${this.state.donation.id}`)
            
        
            // this.setState({order: orderRes.data});
          }catch(err){
            console.log('Error Creating Donation', err)
          }

    } //handleSubmit()

    render() {


        return (

            <div className='formField'>
            
            <Donation hideEditControls={true} /> 
                <h4 className='orderName'>Order Details:</h4>
                {
                    this.state.adoption.id
                    ?
                    <form onSubmit={this.handleCreditCard}>
                        <strong>Credit Card Details</strong>
                        <br/>
                        <input className='donationTextfield' type="text" placeholder="Credit Card Details" onChange={this.handleCreditCardDetails}/>
                        <br/>
                        <strong>Expiry Date</strong>
                        <br/>
                        <input className='donationTextfield' type="text" placeholder="Expiry Date" onChange={this.handleExpiryDate}/>
                        <br/>

                        <button className='buttonFinal'>Donate For Paws</button>
                
                    </form>   
                    :
                    
                    <form onSubmit={this.handleSubmit}>
                        <strong>Address</strong>
                        <br/>
                        <input className='donationTextfield' type="text" placeholder="address" onChange={this.handleInputAddress} />
                        <br /><br />
                        <button className='buttonFinal'>Finalise Payment</button>
                        <br/>

                    </form>
                }
            

            </div>

        ) //return

    }//render()

}
export default Donation