import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import Filter from '../filters/filter';

const prodUrl = "https://snacksapp.herokuapp.com/item"

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
        sessionStorage.setItem('items',this.state.userItem);
    }

    render(){
        console.log(this.state.userItem)
        return(
            <>
                <div className='row'>
                
                    <div id='filter'>
                        <h4>Filters</h4>
                        <hr/>
                        <Filter/>
                    </div>
                    <ListingDisplay listData={this.state.items}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    componentDidMount(){
        fetch(prodUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({items:data})
        })
    }
}


export default Listing