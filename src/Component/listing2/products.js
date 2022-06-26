import React,{Component} from 'react';
import axios from 'axios';
import './product.css';
import ProductDisplay from './productDisplay';

const productUrl="https://snacksapp.herokuapp.com/list/"

class Product extends Component{

    constructor(props){
        super(props)

        this.state={
            product:''
        }
    }

    render(){
        return(
            <>
                <div className='row'>
                    <ProductDisplay productData={this.state.product}/>
                </div>
            </>
        )
    }

    componentDidMount(){
        let id = this.props.match.params.id?this.props.match.params.id:1
        axios.get(`${productUrl}${id}`)
        .then((res) => {this.setState({product:res.data})})
    }
}

export default Product