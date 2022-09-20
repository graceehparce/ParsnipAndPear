import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./recipeList.css"


export const RecipeList = () => {
    const navigate = useNavigate()

    const localUser = localStorage.getItem("pandp_user")
    const userObject = JSON.parse(localUser)

    const { phaseId } = useParams()

    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [veganRecipes, setVeganRecipes] = useState([])
    const [GFRecipes, setGFRecipes] = useState([])

    const [phase, setPhase] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/phases/${phaseId}`)
                .then(response => response.json())
                .then((phaseObject) => {
                    setPhase(phaseObject)
                })
        },
        [phaseId])


    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/?phaseId=${phaseId}`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setRecipes(recipeArray)
                    setFilteredRecipes(recipeArray)
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



    return <section className="flexBox_recipeList">
        <div className="listBox1">
            <div className="listBox2">
                <div className="listBox3">
                    <div className="titleBox">
                        <h2 className="phaseName">{phase?.name} Phase Recipe List</h2>
                        <div>
                            <button className="list-button">Vegan</button>
                            <button className="list-button">Gluten-Free</button>
                        </div>
                    </div>
                    <section className="phaseRecipe_list">
                        <div>
                            {
                                filteredRecipes.map((recipe) => {
                                    return <li className="phaseRecipe_name"><Link className="phaseRecipe_name" to={`/recipe/${recipe.id}`}>{recipe?.name}</Link>
                                        <button
                                            value={recipe.id}
                                            onClick={(clickEvent) => createNewUserRecipe(clickEvent)}
                                            className="add-button">Add to My Recipes</button>
                                    </li>
                                }
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
}