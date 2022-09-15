import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const RecipeProfile = () => {
    const { recipeId } = useParams()

    const [recipe, setRecipe] = useState({})
    const [recIngredients, setIngredients] = useState([])

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)


    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/${recipeId}`)
                .then(response => response.json())
                .then((recipeObject) => {
                    setRecipe(recipeObject)
                })
        },
        [recipeId])

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipeIngredient?_expand=ingredient&recipeId=${recipeId}`)
                .then(response => response.json())
                .then((ingredientArray) => {
                    setIngredients(ingredientArray)
                })
        },
        [recipeId])

    const createNewUserIngredient = (clickEvent) => {

        const UIToSendToAPI = {
            userId: userObject.id,
            ingredientId: clickEvent.target.value,
            quantity: clickEvent.target.id
        }
        fetch("http://localhost:8088/userIngredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UIToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
            })
    }


    return <section classname="recipeProfile">
        <h2 classname="recipeName">{recipe?.name}</h2>
        <div>Cooktime: {recipe?.cookTime}</div>
        <div>Ingredients:
            <ul>
                {
                    recIngredients.map((recIngredient) => {
                        return <li>{recIngredient.quantity} {recIngredient.ingredient.name}<button
                            value={recIngredient.ingredientId}
                            id={recIngredient.quantity}
                            onClick={(clickEvent) => createNewUserIngredient(clickEvent)}
                            className="userIngredient_button">Add</button></li>
                    }
                    )
                }
            </ul>
        </div>
        <div>Directions: {recipe?.directions}</div>
    </section>
}