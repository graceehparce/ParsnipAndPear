import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "../images/logo.jpeg"

export const NavBar = () => {
    const navigate = useNavigate()

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)


    return (<>
        <div className="wholeBar">
            <div className="navBar">
                <img src={logo} alt="logo_img" className="logo_nav" style={{ width: '100px', }} />
                {
                    userObject.staff
                        ? <li className="navbar__item active">
                            <Link className="navbar__link" to="/recipeForm">New Recipe</Link>
                        </li>
                        : ""
                }
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/myRecipes">My Recipes</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/shoppingList">Shopping List</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/phases">Phases</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("pandp_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </div></div></>
    )
}