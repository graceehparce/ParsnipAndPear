import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

    return <section className="recipe_list">
        <header className="title"> My Recipes </header>
        <div>
            {
                userRecipes.map((userRecipe) => {
                    return <li><Link to={`/recipe/${userRecipe.id}`}>{userRecipe.recipe.name}</Link></li>
                }
                )
            }
        </div>
    </section>
}