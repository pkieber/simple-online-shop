import React, { Component } from 'react';

/**
 * Represents a product component.
 */
class Product extends Component {
    state = {}
    
    
    /**
     * Render method of the Product component.
     * Renders the product UI.
     * "props" (short for properties) is a mechanism for passing data from a parent component to a child component.
     * @returns {JSX.Element} JSX representing the component's UI.
     */
    render() { 
        return <div className="card" styles={{width: '18rem'}}>
            <img src={"/assets/img/" + this.props.image} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <button onClick={this.props.onAdd} className="btn btn-primary">Add to basket</button>
            </div>
        </div>;
    }
}

export default Product;