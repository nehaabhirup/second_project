import React,{Component} from 'react';
import './basket.css';

const url = "https://snacksapp.herokuapp.com/productItem";
const purl = "https://snacksapp.herokuapp.com/placeOrder";

class Basket extends Component{

    constructor(props){
        super(props)

        this.state={
            pickedItem:'',
            cost:0
        }
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='orderItems' key={item.list_Id}>

                            <img src={item.image_thumb} alt={item.list_name}/>
                            <h5>{item.list_name}</h5>
                            <h5>Rs. {item.item_price}</h5>
                    </div>
                )
            })
        }
    }

    checkout = () => {
        let obj = this.state;
        obj.pickedItem = sessionStorage.getItem('items')
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
    } 
    render(){
        return(
            <div className='cartContainer'>
                <hr/>
                    <div className='cartHeading'>
                      <center><h4>My Basket</h4></center>  
                    </div>
                    {this.renderItem(this.state.pickedItem)}

                    <div className='cartBody'>
                        <div className='priceDiv'>
                            <h4>Total Price is Rs.{this.state.cost}</h4>
                        </div>
                    </div>
                    <div className='costBtn'><button className='btn btn-success' onClick={this.checkout}>CheckOut</button></div>
                    
            </div>
        )
    }
    componentDidMount(){
        let pickedItem = sessionStorage.getItem('items');
        let orderId = [];
        pickedItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.item_price)
                return 'ok'
            })
            this.setState({pickedItem:data,cost:totalPrice})
        })
    }
}
export default Basket;