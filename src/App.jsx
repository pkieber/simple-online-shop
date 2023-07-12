import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
                <div className='product-container'>
                    <Product image="tomatoe.jpg" title="Tomatoes" description="Add tomatoes to your shopping cart."/>
                    <Product image="potatoes.jpg" title="Potatoes" description="Add potatoes to your shopping cart."/>
                    <Product image="peppers.jpg" title="Peppers" description="Add peppers to your shopping cart."/>
                    <Product image="broccoli.jpg" title="Broccoli" description="Add broccoli to your shopping cart."/>
                </div>
                <ShoppingCart/>
            </div>
        </React.Fragment>;
    }
}

export default App;