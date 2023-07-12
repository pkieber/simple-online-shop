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
        return <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
            </div>
        </nav>
    }
}

export default Navbar;