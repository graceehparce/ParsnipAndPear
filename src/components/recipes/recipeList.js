import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const RecipeList = () => {
    const navigate = useNavigate()

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)

    const { phaseId } = useParams()

    const [recipes, setRecipes] = useState([])
    const [phase, setPhase] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/?phaseId=${phaseId}`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setRecipes(recipeArray)
                })
        },
        [phaseId])

    useEffect(
        () => {
            fetch(`http://localhost:8088/phases/${phaseId}`)
                .then(response => response.json())
                .then((phaseObject) => {
                    setPhase(phaseObject)
                })
        },
        [phaseId])

    const createNewUserRecipe = (clickEvent) => {

        const URToSendToAPI = {
            userId: userObject.id,
            recipeId: clickEvent.target.value
        }
        fetch("http://localhost:8088/userRecipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(URToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myRecipes")
            })
    }



    return <section className="recipe_list">
        <header className="phaseName">{phase?.name} Phase Recipe List</header>
        <div>
            {
                recipes.map((recipe) => {
                    return <li><Link to={`/recipe/${recipe.id}`}>{recipe?.name}</Link>
                        <button
                            value={recipe.id}
                            onClick={(clickEvent) => createNewUserRecipe(clickEvent)}
                            className="userRecipe_button">Add to My Recipes</button>
                    </li>
                }
                )
            }
        </div>
    </section>
}