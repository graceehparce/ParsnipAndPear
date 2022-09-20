import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./recipeProfile.css"


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
            fetch(`http://localhost:8088/recipeIngredients?_expand=ingredient&recipeId=${recipeId}`)
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


    return <section className="profileFlexBox">
        <div className="RPBox1">
            <div className="RPBox2">
                <div className="RPBox3">

                    <section className="recipeProfile">
                        <div className="recipeName">{recipe?.name}</div>
                        <div className="upperBox">
                            <img src={recipe.image} width="300px" height="450px" alt=""></img>
                            <div className="cooktimeBox">
                                <div className="cooktime">Cooktime: {recipe?.cookTime} minutes</div>
                                <div>Ingredients:
                                    <ul className="flexIng">
                                        {
                                            recIngredients.map((recIngredient) => {
                                                return <li className="flexItem">{recIngredient.quantity} {recIngredient.ingredient.name}
                                                    <button
                                                        value={recIngredient.ingredientId}
                                                        id={recIngredient.quantity}
                                                        onClick={(clickEvent) => createNewUserIngredient(clickEvent)}
                                                        className="addButton">Add
                                                    </button>
                                                </li>
                                            }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="directions">Directions: {recipe?.directions}</div>
                    </section>
                </div>
            </div>
        </div >
    </section >
}