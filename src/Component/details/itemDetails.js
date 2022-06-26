import React,{Component} from 'react';
import axios from 'axios';
import './details.css';

const prodUrl = "https://snacksapp.herokuapp.com/viewDetails?prod_id="

class ItemDetails extends Component{
    
    constructor(){
        super()

        this.state={
            details:''
        }
    }
    render(){
        let {details} = this.state

        return(
            <>
                <div id="mainContent">
                    <div className="img_div">
                        <img src={details.image_url} alt="snacks"/>
                    </div>
                    <div className='contentBox'>
                        <h3 style={{marginTop:'6%',marginLeft:'30px',fontFamily:'Arial, Helvetica, sans-serif'}}>{details.name}</h3>
                        <h6 style={{marginLeft:'30px',fontFamily:'Arial, Helvetica, sans-serif'}}><del>Old Price: 1000</del></h6>
                        <h6 style={{marginLeft:'30px',fontFamily:'Arial, Helvetica, sans-serif'}}>Price: Rs.{details.cost1}</h6>
                        <button className="btn btn-add">ADD</button>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let prodId = this.props.location.search.split('=')[1];
        axios.get(`${prodUrl}${prodId}`)
        .then((res) => {this.setState({details:res.data[0]})})
    }
}
export default ItemDetails;