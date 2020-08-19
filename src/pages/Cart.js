import React, {useContext, useState} from "react"
import {ThemeContext} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, setCartItems} = useContext(ThemeContext)
    const [buttonText, setButtonText] = useState("Place Order")
    const total = cartItems.length * 5.99
    const totalDisplay = total.toLocaleString("en-US", {style: "currency", currency: "USD"})


    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Order Placed")
            setCartItems([])
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalDisplay}</p>
            <div className="order-button">
                { cartItems.length > 0 ? <button onClick={() => placeOrder()}>{buttonText}</button> : <p>You have no items in your cart.</p>}
            </div>
        </main>
    )
}

export default Cart