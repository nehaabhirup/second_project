import React from 'react';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
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
                                        <option value={item.cost1}>{item.ddl_value1}</option>
                                        <option value={item.cost2}>{item.ddl_value2}</option>
                                    </select>
                                    <input type="text" value={item.cost1} id="price"/>
                                    <div className='delivery'>{item.delivery}</div>
                                    <div className='time'>{item.time}</div>
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
        <div id="content">
            {renderData(props)}
        </div>
    )
}
export default ListingDisplay