import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)


    return (
        <ul className="navbar">
            {
                !userObject.staff
                    ? <li className="navbar__item active">
                        <Link className="navbar__link" to="/recipeForm">New Recipe</Link>
                    </li>
                    : ""
            }
            {
                !userObject.staff
                    ? <li className="navbar__item active">
                        <Link className="navbar__link" to="/myRecipes">My Recipes</Link>
                    </li>
                    : ""
            }
            {
                !userObject.staff
                    ? <li className="navbar__item active">
                        <Link className="navbar__link" to="/shoppingList">Shopping List</Link>
                    </li>
                    : ""
            }
            <li className="navbar__item active">
                <Link className="navbar__link" to="/phases">Phases</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("pandp_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}