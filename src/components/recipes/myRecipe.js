import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./myRecipes.css"


export const MyRecipes = () => {
    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)

    const [userRecipes, setUserRecipes] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/userRecipes/?userId=${userObject.id}&_expand=recipe`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setUserRecipes(recipeArray)
                })
        },
        [])


    const deleteUR = (evt) => {

        return fetch(`http://localhost:8088/userRecipes/${evt.target.value}`, {
            method: "DELETE"
        })
            .then(() => {
                fetch(`http://localhost:8088/userRecipes/?userId=${userObject.id}&_expand=recipe`)
                    .then(response => response.json())
                    .then((userRecipeArray) => {
                        setUserRecipes(userRecipeArray)
                    })

            })
    }

    return <section className="recipe_list">
        <div className="inner_list">
            <div className="banner_pic_box">
                <div className="list_box">
                    <div className="titleBox">
                        <div className="outer">
                            <h2 className="inner_title">
                                <div className="myRecipes_title">
                                    My Recipes
                                </div>
                            </h2>
                        </div>
                    </div>
                    <div className="recipeGrid">
                        {
                            userRecipes.map((userRecipe) => {
                                return <li className="recipe">
                                    <img className="listPicBox" src={userRecipe.recipe.image} alt=""></img>
                                    <Link className="recipe_name" to={`/recipe/${userRecipe.recipe.id}`}>{userRecipe.recipe.name}</Link>
                                    <div className="info">Cooktime: {userRecipe.recipe.cookTime}</div>
                                    <button
                                        className="delete_button"
                                        value={userRecipe.id}
                                        onClick={deleteUR}>Delete
                                    </button>
                                </li>
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
}