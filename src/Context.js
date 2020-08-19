import React , {useState, useEffect} from "react"
const ThemeContext = React.createContext()

function Provider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


    function toggleFavorite(id) {
        const newPhotos = allPhotos.map(photo => {
            if(photo.id === id) {
                photo.isFavorite = !photo.isFavorite
            }
            return photo
        })
        return setAllPhotos(newPhotos)
    }

    function addCartItem(newItem) {
        return setCartItems(prevCart => [...prevCart, newItem])
    }

    function removeCartItem(newItem) {
        const newCartItems = cartItems.filter(item => item.id !== newItem.id)
        return setCartItems(newCartItems)
    }
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAllPhotos(data)
            })
    }, [])
    
    return (
        <ThemeContext.Provider value={{allPhotos, cartItems, setCartItems, toggleFavorite, addCartItem, removeCartItem}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, Provider}