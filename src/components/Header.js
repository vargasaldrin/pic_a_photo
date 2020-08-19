import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {ThemeContext} from "../Context"

function Header() {
    const {cartItems} = useContext(ThemeContext)
    const cartClass = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line" 
    return (
        <header>

            <Link to="/">
                <h2>Pic a Photo</h2>
            </Link>
            <Link to="/cart">
            <i className={`${cartClass} ri-fw ri-2x`}></i>
            </Link>
            
        </header>
    )
}

export default Header


// # Challenge

// Set up React Router for our app. We should be able to do the following:

// 1. Click on the words "Pic Some" in the header to go to the "/" route, which should display the Photos component (found in the pages folder)

// 2. Click on the shopping cart icon in the header to go to the "/cart" route, which should display the Cart component (found in the pages folder)