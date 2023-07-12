import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

/**
 * Represents the main App component.
 */
class App extends Component {
    state = { 
        items: []
    } 


    /**
     * Adds an item to the state's items array.
     * @param {number} amount - The amount of the item.
     * @param {string} name - The name of the item.
     * @param {number} price - The price of the item.
     * The setState method is used to update the state of a component.
     */
    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;

        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }
        this.setState({ items: currentItems });
        console.log(this.state);
    }
    

    /**
     * Render method of the App component.
     * Renders the App UI.
     * @returns {JSX.Element} JSX representing the component's UI.
     */
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomatoes', 2.99)} image="tomatoe.jpg" title="Tomatoes" description="Add tomatoes to your shopping cart."/>
                    <Product onAdd={() => this.addItem(1, 'Potatoes', 3.99)} image="potatoes.jpg" title="Potatoes" description="Add potatoes to your shopping cart."/>
                    <Product onAdd={() => this.addItem(1, 'Peppers', 4.99)} image="peppers.jpg" title="Peppers" description="Add peppers to your shopping cart."/>
                    <Product onAdd={() => this.addItem(1, 'Broccoli', 5.99)} image="broccoli.jpg" title="Broccoli" description="Add broccoli to your shopping cart."/>
                </div>
                <ShoppingCart items={this.state.items}/>
            </div>
        </React.Fragment>;
    }
}

export default App;