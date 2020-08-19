import React, {useState, useContext} from "react"
import {ThemeContext} from "../Context"
import PropTypes from 'prop-types';


function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, cartItems, addCartItem, removeCartItem} = useContext(ThemeContext)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function plusChoice() {
        const checkCartItems = cartItems.some(item => item.id === img.id)
        if(checkCartItems) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(img)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }
    }

    return (
        <div onMouseOver={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className={`${className} image-container`}>
            {heartIcon()}
            {plusChoice()}
            <img src={img.url} className="image-grid" alt={`something${img.id}`}/>
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    }),

}

export default Image
