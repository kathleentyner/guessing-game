import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar"> 
            <div className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </div>

            <div className="navbar_item navbar_products">
                <Link className="navbar__link" to="/products">Products</Link>
            </div>
            
            <div className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </div>
        </div>
    )
}
