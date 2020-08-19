import React, {useState, useContext} from "react"
import {ThemeContext} from "../Context"

function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeCartItem} = useContext(ThemeContext)
    
    const binClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={binClass}
                onMouseOver={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)} 
                onClick={() => removeCartItem(item)}>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem