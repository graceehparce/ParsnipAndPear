import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./shoppingList.css"


export const ShoppingList = () => {

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)

    const [userIngredients, setUserIngredients] = useState([])



    useEffect(
        () => {
            fetch(`http://localhost:8088/userIngredients/?userId=${userObject.id}&_expand=ingredient`)
                .then(response => response.json())
                .then((userIngredientArray) => {
                    setUserIngredients(userIngredientArray)
                })
        },
        [])

    const deleteUI = (evt) => {

        return fetch(`http://localhost:8088/userIngredients/${evt.target.value}`, {
            method: "DELETE"
        })
            .then(() => {
                fetch(`http://localhost:8088/userIngredients/?userId=${userObject.id}&_expand=ingredient`)
                    .then(response => response.json())
                    .then((userIngredientArray) => {
                        setUserIngredients(userIngredientArray)
                    })

            })
    }

    return <section className="shopping_list">
        <div className="shopBox1">
            <div className="shopBox2">
                <div className="shopBox3">
                    <div className="outer-shop_title">
                        <h2 className="heading">Shopping List
                        </h2>
                    </div>
                    <ul>
                        {
                            userIngredients.map((userIngredient) => {
                                return <li className="item">
                                    <Link className="ingredient_name" to={`/ingredientEdit/${userIngredient.id}`}><div>{userIngredient.quantity} {userIngredient.ingredient.name}</div></Link>
                                    <button
                                        className="delete_button_shoppingList"
                                        value={userIngredient.id}
                                        onClick={deleteUI}>Delete
                                    </button>
                                </li>
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

