import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';
import 'bootstrap-icons/font/bootstrap-icons.css';


/**
 * Represents the main App component.
 */
class App extends Component {
    state = {
        items: []
    };

  // Function to handle adding an item to the cart
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
    };

    // Function to handle increasing the quantity of an item
    handleIncrease = (name) => {
        this.setState((prevState) => ({
        items: prevState.items.map(item =>
            item.name === name ? { ...item, amount: item.amount + 1 } : item
        )
        }));
    };

    // Function to handle decreasing the quantity of an item
    handleDecrease = (name) => {
        this.setState((prevState) => ({
        items: prevState.items.map(item =>
            item.name === name && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
        )
        }));
    };

    // Function to handle removing an item from the cart
    handleRemove = (name) => {
        this.setState((prevState) => ({
        items: prevState.items.filter(item => item.name !== name)
        }));
    };

    /**
     * Render method of the App component.
     * Renders the App UI.
     * @returns {JSX.Element} JSX representing the component's UI.
     */
    render() {
        return (
        <React.Fragment>
            <Navbar />
            <div className='main-container'>
            <div className='product-container'>
                <Product onAdd={() => this.addItem(1, 'Tomatoes', 2.99)} image="tomatoe.jpg" title="Tomatoes" description="Buy 500g fresh, hand-picked tomatoes from local farmers."/>
                <Product onAdd={() => this.addItem(1, 'Potatoes', 3.99)} image="potatoes.jpg" title="Potatoes" description="Buy 1kg medium-sized potatoes from local farmers."/>
                <Product onAdd={() => this.addItem(1, 'Peppers', 4.99)} image="peppers.jpg" title="Peppers" description="Buy 500g red and yellow peppers from local farmers."/>
                <Product onAdd={() => this.addItem(1, 'Broccoli', 5.99)} image="broccoli.jpg" title="Broccoli" description="Buy 500g fresh, green broccoli from local farmers."/>
            </div>
            <ShoppingCart
                items={this.state.items}
                onRemove={this.handleRemove}
                onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease}
            />
            </div>
        </React.Fragment>
        );
    }
}

export default App;