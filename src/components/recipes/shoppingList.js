import { useEffect, useState } from "react"

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

    return <section className="shopping_list">
        <header className="heading">Shopping List</header>
        <ul>
            {
                userIngredients.map((userIngredient) => {
                    return <li>{userIngredient.quantity} {userIngredient.ingredient.name}
                    </li>
                }
                )
            }
        </ul>
    </section>
}
