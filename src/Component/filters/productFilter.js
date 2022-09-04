import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProductFilter extends Component {

    renderFilter = ({filterData}) =>{
        if(filterData){

            if(filterData){
                return filterData.map((item) =>{

                    return(
                        <div key={item.category_id}>
                            <ul className='list-group'>
                                <li className="list-group-item">{item.name}</li>
                                <li className='list-group-item filter-group'>{item.productTypes[0].map(option =><label><Link to={`/listing?productId=${option.product_id}`}>{option.product_name}</Link></label>)}</li>
                            </ul>
                        </div>
                    )
                })
            }
        }
    }
    render(){
        
        return(
            <ul>
                {this.renderFilter(this.props)}
            </ul>
        )
    }
}

export default ProductFilter;