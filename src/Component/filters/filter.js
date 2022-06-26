import React,{Component} from 'react';
import ProductFilter from './productFilter';

const url = "https://snacksapp.herokuapp.com/category/"

class Filter extends Component{

    constructor(props){
        super(props)

        this.state={
            category:''
        }

    }

    render(){
        return(
            <>
                <div className='row'>
                    
                    <ProductFilter filterData={this.state.category}/>
                </div>
            </>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({category:data})
        })
    }
}

export default Filter