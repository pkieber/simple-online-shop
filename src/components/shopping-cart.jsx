import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { 
        items: [
            {
                id: 'p001', // unique key, i.e. product number, etc.
                amount: 1,
                name: 'Tomatoes',
                price: 4.9,
            },
            {
                id: 'p002',
                amount: 1,
                name: 'Potatoes',
                price: 4.9,
            },{
                id: 'p003',
                amount: 1,
                name: 'Peppers',
                price: 4.9,
            },
            {
                id: 'p004',
                amount: 1,
                name: 'Broccoli',
                price: 4.9,
            }
        ]
    } 
    
    render() { 
        return <div className='shopping-cart'>
            <h2>Shopping Cart</h2>
            { this.state.items.map(item => 
                <div key={ item.id }>
                    { item.amount } x { item.name } { item.price }$
                </div>
                ) 
            }
        </div>;
    }
}

export default ShoppingCart;