import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"
import { FaPizzaSlice } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (
        <nav className="main-nav">
            <Link to="/"><h3><i className="fa-solid"><FaPizzaSlice /> </i> Pizzería Mamma Mia! </h3></Link>
            <Link to="/carrito"><i className="fa-solid"><FaShoppingCart /> $ {cartTotal()} </i></Link>
        </nav>
    )
}

export default Navbar