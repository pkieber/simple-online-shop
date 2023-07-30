import React, { Component } from 'react';

/**
 * Represents a shopping cart component.
 */
class ShoppingCart extends Component {
    state = { 
        /**
         * The items in the shopping cart.
         * @type {Array<{ amount: number, name: string, price: number }>}
         */
        items: [
            {
                amount: 1,
                name: 'Tomatoes',
                price: 2.99,
            },
            {
                amount: 1,
                name: 'Potatoes',
                price: 3.99,
            },{
                amount: 1,
                name: 'Peppers',
                price: 4.99,
            },
            {
                amount: 1,
                name: 'Broccoli',
                price: 5.99,
            },
        ]
    };

    
    /**
     * Render method of the ShoppingCart component.
     * Renders the shopping cart UI.
     * @returns {JSX.Element} JSX representing the component's UI.
     */
    render() { 
        return <div className='shopping-cart'>
            <h2>Your Order</h2>
            { this.props.items.map(item => 
                <div key={ item.name }>
                    {item.amount} x {item.name} (${item.price}) = 
                        ${(item.amount * item.price).toFixed(2)}
                </div>
                ) 
            }
            <hr />
            <div>
                Total Sum:
            </div>
        </div>;
    }
}

export default ShoppingCart;