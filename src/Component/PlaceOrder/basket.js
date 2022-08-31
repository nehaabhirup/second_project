import React,{Component} from 'react';
import './basket.css';

const url = "https://snacksapp.herokuapp.com/productItem";
const purl = "https://snacksapp.herokuapp.com/placeOrder";

class Basket extends Component{

    constructor(props){
        super(props)

        this.state={

            id:Math.floor(Math.random()*100000),
            name:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[0]:'',
            email:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'',
            cost:0,
            phone:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[2]:'',
            address: 'BeeUrban Rose',
            pickedItem:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
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
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('order Added'))
    } 
    render(){
        return(
            <div className='cartContainer'>
                    <hr/>
                    <div className='cartHeading'>
                      <center><h4>My Basket</h4></center>  
                    </div>
                    <div className='cartBody'>
                        <form action="https://merapayment.herokuapp.com/paynow" method="POST">
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input id="address" name="address" className="form-control"
                                value={this.state.address} onChange={this.handleChange}/>
                            </div>
                        </div>
                        {this.renderItem(this.state.pickedItem)}
                        <div className='cartBody'>
                            <div className='priceDiv'>
                                <h4>Total Amount: Rs.{this.state.cost}</h4>
                            </div>
                        </div>
                        <div className='costBtn'><button className='btn btn-success' onClick={this.checkout}>CheckOut</button></div>
                        </form>
                    </div>
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