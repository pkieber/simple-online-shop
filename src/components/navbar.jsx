import React, { Component } from "react";

/**
 * Represents a navigation bar component.
 */
class Navbar extends Component {
    state = {} 


    /**
     * Render method of the Navbar component.
     * Renders the navigation bar UI.
     * @returns {JSX.Element} JSX representing the component's UI.
     */
    render() { 
        return <nav class="nav-bar-container p-3 mb-2 bg-primary text-white">
            <div className="logo-container container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/assets/img/logo.png" width="25" height="25" class="d-inline-block align-top" alt=""/>
                    Veggie Shop
                </a>
            </div>
            <form className="search-container form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </nav>
    }
}

export default Navbar;