import React,{Component} from 'react';
import './listing.css';

class ListingDisplay extends Component {

    orderId= [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div key={item.list_Id}>
                            <div className="tile">
                                <div className='imgDiv'>
                                    <img src={item.image_thumb} className="Image" alt="item-img"/>
                                </div>
                                <div className='contentDiv'>
                                    <div className='img_name'>
                                        <h6 style={{fontWeight:'400'}}>{item.list_name}</h6>
                                    </div>
                                    <select className='dropdown'>
                                        <option>{item.ddl_value1}</option>
                                        <option>{item.ddl_value2}</option>
                                    </select>
                                    <div className='price'>Rs.{item.item_price}</div>
                                    <div className='delivery'>{item.delivery}</div>
                                    <div className='time'>{item.time}</div>
                                    <div className='addbtn'>
                                        <button className='btn btn-success' 
                                        onClick={() => {this.placeOrder(item.list_Id)}}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
       
    }
    render(){
        return(
            <>
            <div id="content">
                {this.renderData(this.props)}
            </div>
            <div className='cartdetails'>
                Item Number {this.renderCart(this.orderId)} Added
            </div>
            </>
        )
    }
    
}
export default ListingDisplay;