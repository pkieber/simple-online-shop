import React from 'react';

const ShoppingCart = ({ items, onRemove, onIncrease, onDecrease }) => {
    return (
        <div className='shopping-cart'>
        <h2>Your Order</h2>
        {items.map(item => (
            <div key={item.name}>
                {item.amount} x {item.name} (${item.price}) = ${(item.amount * item.price).toFixed(2)}
                <div className="icons-container">
                    <i
                    onClick={() => onIncrease(item.name)}
                    className="bi bi-plus-circle-fill icons"
                    ></i>
                    <i
                    onClick={() => onDecrease(item.name)}
                    className="bi bi-dash-circle-fill icons"
                    ></i>
                    <i
                    onClick={() => onRemove(item.name)}
                    className="bi bi-x-circle-fill icons"
                    ></i>
                </div>
            </div>
        ))}
        <hr />
        <div>
            Total Sum:
            <div>
            {items.reduce((total, item) => total + item.amount * item.price, 0).toFixed(2)}
            </div>
        </div>
        </div>
    );
};

export default ShoppingCart;