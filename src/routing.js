import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/listing1/listing';
import Product from './Component/listing2/products';
import ItemDetails from './Component/details/itemDetails';
import Login from './Component/login/loginComponent';
import Register from './Component/login/registerComponent'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing" component={Listing}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/viewDetails" component={ItemDetails}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;
