import React,{Component} from 'react';
import './Display.css';
import {Link} from 'react-router-dom';

class Display extends Component{

  selectCost = (event)=>{
    let val = event.target.value;
    let t = val;
    document.getElementById("price").value = t;
  }
    render(){
        return(
        <div>
            <div className="img-container">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="imajes/fresho.jpg" alt="fresho" className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src="imajes/household.jpg" alt="household" className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src="imajes/happy.jpg" alt="happy" className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src="imajes/kitchen.jpg" alt="kitchen" className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src="imajes/milk.jpg" alt="milk" className="d-block w-100"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tile-div">
                  <Link to={`/listing`}>
                    <button className="button show-btn">Show More</button>
                  </Link>
                  <div className="title">Fruits and Vegetables</div>
                  <div className="card cardDiv">
                    <img className="card-img-top" src="pictures/banana.jpg" alt="Card image"/>
                    <div className="card-body">
                      <form name="myform">
                        <select className="dropBtn" onChange={this.selectCost}>
                          <option value="Rs.44">1 kg-Rs 44</option>
                          <option value="Rs.22">500 g-Rs 22</option>
                        </select>
                        <input type="text" value="Rs.44" id="price"/>
                      </form>
                      <div className='delivery'>Standard Delivery Tomorrow</div>
                      <div className='time'>7:00PM-9:00PM</div>
                      <span>
                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                        <input type="text" id="inputext"/>
                        <button type="button" class="button btnAdd" value="Input Button">ADD</button>
                      </span>
                    </div>
                  </div>
                  <div className="card cardDiv">
                    <img className="card-img-top" src="pictures/beans.jpg" alt="Card image"/>
                    <div className="card-body">
                      <form name="myform">
                        <select className="dropBtn" onChange={this.selectCost}>
                          <option value="Rs.60">1 kg-Rs 60</option>
                          <option value="Rs.30">500 g-Rs 30</option>
                        </select>
                        <input type="text" value="Rs.60" id="price"/>
                      </form>
                      <div className='delivery'>Standard Delivery Tomorrow</div>
                      <div className='time'>7:00PM-9:00PM</div>
                      <span>
                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                        <input type="text" id="inputext"/>
                        <button type="button" className="button btnAdd" value="Input Button">ADD</button>
                      </span>
                    </div>
                  </div>
                  <div className="card cardDiv">
                    <img className="card-img-top" src="pictures/capsicum.jpg" alt="Card image"/>
                    <div className="card-body">
                      <form name="myform">
                        <select className="dropBtn" onChange={this.selectCost}>
                          <option value="Rs.102">1 kg-Rs 102</option>
                          <option value="Rs.51">500 g-Rs 51</option>
                        </select>
                        <input type="text" value="Rs.102" id="price"/>
                      </form>
                      <div className='delivery'>Standard Delivery Tomorrow</div>
                      <div className='time'>7:00PM-9:00PM</div>
                      <span>
                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                        <input type="text" id="inputext"/>
                        <button type="button" className="button btnAdd" value="Input Button">ADD</button>
                      </span>
                    </div>
                  </div>
                  <div className="card cardDiv">
                    <img className="card-img-top" src="pictures/flower.jpg" alt="Card image"/>
                    <div className="card-body">
                      <form name="myform">
                        <select className="dropBtn" onChange={this.selectCost}>
                          <option value="Rs.58">1 kg-Rs 58</option>
                          <option value="Rs.29">500 g-Rs 29</option>
                        </select>
                        <input type="text" value="Rs.58" id="price"/>
                      </form>
                      <div className='delivery'>Standard Delivery Tomorrow</div>
                      <div className='time'>7:00PM-9:00PM</div>
                      <span>
                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                        <input type="text" id="inputext"/>
                        <button type="button" className="button btnAdd" value="Input Button">ADD</button>
                      </span>
                    </div>
                  </div>
                  <div className="card cardDiv">
                    <img className="card-img-top" src="pictures/ging.jpg" alt="Card image"/>
                    <div className="card-body">
                      <form name="myform">
                        <select className="dropBtn" onChange={this.selectCost}>
                          <option value="Rs.28">500 g-Rs 28</option>
                          <option value="Rs.14">250 g-Rs 14</option>
                        </select>
                        <input type="text" value="Rs.28" id="price"/>
                      </form>
                      <div className='delivery'>Standard Delivery Tomorrow</div>
                      <div className='time'>7:00PM-9:00PM</div>
                      <span>
                        <label for="quantity" style={{fontSize:'14px',marginLeft:'8px'}}>Qty</label>
                        <input type="text" id="inputext"/>
                        <button type="button" className="button btnAdd" value="Input Button">ADD</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="popular">
                  <div className="title">Most Popular</div>
                    <div className="card">
                      <div className="card-body">
                        <img src="pictures/ayurveda.jpg" alt="ayurveda" height="200px" width="100%"/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <img src="pictures/deo.jpg" alt="ayurveda" height="200px" width="100%"/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <img src="pictures/mask.jpg" alt="ayurveda" height="200px" width="100%"/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <img src="pictures/holi.jpg" alt="ayurveda" height="200px" width="100%"/>
                      </div>
                    </div>
                </div>
                <div className="topOffer">
                    <div className="title">Top Offers</div>
                    <div className="offer">
                      <div className="myDiv">
                        <img src="pictures/offer1.jpg" alt="offer" height="200px" width="100%"/>
                      </div>
                      <div className="myDiv">
                        <img src="pictures/offer1.jpg" alt="offer" height="200px" width="100%"/>
                      </div>
                      <div className="myDiv">
                        <img src="pictures/offer1.jpg" alt="offer" height="200px" width="100%"/>
                      </div>
                      <div className="myDiv">
                        <img src="pictures/offer1.jpg" alt="offer" height="200px" width="100%"/>
                      </div>
                    </div>
                </div>
                <div className="dailyStaples">
                  <div className="title">Your Daily Staples</div>
                  <div className="daily">
                    <div className="myDiv1">
                      <img src="pictures/flour.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pictures/ghee.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pictures/Dry Fruits.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pictures/salt-sugar.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pictures/rice.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pictures/pulses.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                  </div>

                </div>
                <div className='snacksStore'>
                  <div className="title">Snacks Store</div>
                  <div className="snacks">
                    <div className="myDiv">
                      <img src="pictures/chips.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pictures/cookies.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pictures/noodles.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pictures/snacks.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                  </div>
                </div>
                <div className="household">
                  <div className="title">Cleaning and Household</div>
                  <div className="house">
                    <div className="myDiv">
                      <img src="pics/detergent.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/cleaner.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/freshners.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/scrubs.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                  </div>
                </div>
                <div className="beauty">
                  <div className="title">Beauty and Hygiene</div>
                  <div className="hygiene">
                    <div className="myDiv">
                      <img src="pics/skin-care.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/deos.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/wellness.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                    <div className="myDiv">
                      <img src="pics/shaving.jpg" alt="snacks" height="200px" width="100%"/>
                    </div>
                  </div>
                </div>
                <div className="kitchen">
                  <div className="title">Kitchen and Essentials</div>
                  <div className="essentials">
                    <div className="myDiv1">
                      <img src="pics/battery.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pics/bottle.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pics/cooker.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pics/glassware.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pics/electricals.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                    <div className="myDiv1">
                      <img src="pics/tools.jpg" alt="offer" height="170px" width="100%"/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Display;