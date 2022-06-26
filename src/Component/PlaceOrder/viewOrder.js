import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "https://snacksapp.herokuapp.com/viewOrder"

class ViewOrder extends Component{

    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo').split(',')[1];
        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}
export default ViewOrder;