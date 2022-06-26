import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    render(){
        return(
            <header>
                <div id="icon">
                   <span><img src="https://i.ibb.co/31Yfwpm/f-letter.png"/></span>
                   <span><h1>Foodigo</h1></span>
                </div>
                <div className="searchBox">
                    <input className="search-txt" type="text" name="box" placeholder="Type to Search"/>
                    <button className="searchBtn" type="submit"><i className="fa fa-search"></i></button>
                </div>
                  
                <div className="buttons">
                    <button type="button" className="btn btn-link">LogIn</button>
                    <button type="button" className="btn">
                        <img src="https://i.ibb.co/Tqbrcb1/cart.png" alt="cart" height="28px" width="35px"/>
                    </button>
                </div>
            </header>
        )
    }
}
export default Header;