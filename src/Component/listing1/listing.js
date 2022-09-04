import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';

const prodUrl = "https://snacksapp.herokuapp.com/filters?product_id="

class Listing extends Component{

    constructor(props){
        super(props)

        this.state={
            items:'',
            userItem:''
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data});
        sessionStorage.setItem('list',this.state.userItem);
    }

    render(){
        console.log(this.state.userItem)
        return(
            <>
                <div className='row'>
                    <ListingDisplay listData={this.state.items}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    componentDidMount(){
        let productId = this.props.location.search.split('=')[1];
        fetch(`${prodUrl}/${productId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({items:data})
        })
    }
}


export default Listing