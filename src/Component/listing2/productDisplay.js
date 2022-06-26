import React from 'react';
import {Link} from 'react-router-dom'

const ProductDisplay = (props) => {

    const renderData = ({productData}) => {
        if(productData){
            if(productData.length>0){
                return productData.map((item) => {
                    return(
                        <div key={item.product_id}>
                            <div className="tileDiv">
                                <div className='imgDiv'>
                                <Link to={`/viewDetails?prodId=${item.prod_id}`}><img src={item.image_url} className="Image" alt="item-img"/></Link>
                                </div>
                                <div className='contentDiv'>
                                    <div className='img_name'>
                                        <h6 style={{fontWeight:'400'}}>
                                            {item.name}
                                        </h6>
                                    </div>
                                    <div>
                                        <select className='dropdown'>
                                            <option value={item.cost1}>{item.ddl_value1}</option>
                                            <option value={item.cost2}>{item.ddl_value2}</option>
                                        </select>
                                        <input type="text" value={item.cost1} id="price"/>
                                    </div>
                                    <div className='delivery'>{item.delivery}</div>
                                    <div className='timeDiv'>{item.time}</div>
                                    <span>
                                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                                        <input type="text" id="inputbox"/>
                                        <button type="button" className="button btnAdd" value="Input Button">ADD</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
       
    }
    return(
        <div id="contentDiv">
            {renderData(props)}
        </div>
    )
}
export default ProductDisplay

