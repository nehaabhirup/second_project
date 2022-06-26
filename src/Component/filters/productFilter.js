import React from 'react';
import {Link} from 'react-router-dom'

const ProductFilter = (props) => {
    const renderFilter = ({filterData}) =>{
        if(filterData){

            if(filterData){
                return filterData.map((item) =>{

                    return(
                        <div key={item.category_id}>
                            <ul className='list-group'>
                                <li className="list-group-item">{item.name}</li>
                                <li className='list-group-item filter-group'>{item.productTypes.map(option =><label><Link to={`/products/${option.product_id}`}>{option.product_name}</Link></label>)}</li>
                            </ul>
                        </div>
                    )
                })
            }
        }
    }
    return(
        <ul>
            {renderFilter(props)}
        </ul>
    )
}

export default ProductFilter;