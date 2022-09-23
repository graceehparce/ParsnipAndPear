import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./recipeForm.css"




export const NewRecipeForm = () => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState([{ name: "", quantity: "" }])
    const [phases, setPhases] = useState([])
    const [recipe, setNewRecipe] = useState({
        phaseId: "",
        cookTime: "",
        directions: "",
        name: "",
        vegan: "",
        glutenFree: "",
        image: ""
    })


    useEffect(
        () => {
            fetch('http://localhost:8088/phases')
                .then(response => response.json())
                .then((phasesArray) => {
                    setPhases(phasesArray)
                })
        },
        []
    )




    const createRecipe = (recipeObject) => {
        return fetch("http://localhost:8088/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObject)
        })
            .then(response => response.json())
    }

    const createIngredient = (formObject) => {
        return fetch("http://localhost:8088/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: formObject.name })
        })
            .then(response => response.json())
    }

    const createRecipeIngredient = (recipeId, ingredientId, quantity) => {
        return fetch("http://localhost:8088/recipeIngredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipeId, ingredientId, quantity
            })
        })
            .then(response => response.json())
    }

    const saveButton = (event) => {
        event.preventDefault()

        const recipeToSendToAPI = {
            phaseId: recipe.phaseId,
            name: recipe.name,
            cookTime: recipe.cookTime,
            directions: recipe.directions,
            glutenFree: recipe.glutenFree,
            vegan: recipe.vegan,
            image: recipe.image

        }

        createRecipe(recipeToSendToAPI)
            .then(newRecipe => {
                const ingredientPromises = formValues.map(
                    formObject => {
                        return createIngredient(formObject)
                    }
                )

                // do fetch call to create ingredients

                Promise.all(ingredientPromises)
                    .then(newIngredientArray => {
                        const finalPromises = []

                        newIngredientArray.forEach((ingredient) => {
                            const foundQuantity = formValues.find((formIngredientObject) => {
                                return ingredient.name === formIngredientObject.name
                            }).quantity


                            finalPromises.push(createRecipeIngredient(newRecipe.id, ingredient.id, foundQuantity))
                        })
                        Promise.all(finalPromises).then(() => navigate(`/recipes/${newRecipe.phaseId}`))
                    })




            })
    }

    let handleChange = (currentIndex, changeEvent) => {
        let newFormValues = [...formValues];
        newFormValues[currentIndex][changeEvent.target.name] = changeEvent.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = (evt) => {
        evt.preventDefault()
        setFormValues([...formValues, { name: "", quantity: "" }])
    }


    return <div className="flexBox-form">
        <form className="newRecipeForm">
            <div className="inner_form">
                <div className="white_form">
                    <div className="flexTitle">
                        <div className="outer_title">
                            <h2 className="title">New Recipe Form</h2>
                        </div>
                    </div>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="What's it called?"
                                value={recipe.name}
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.name = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <div>
                                <label htmlFor="type">Which Phase?
                                </label>
                            </div>
                            <select
                                class="form_select"
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.phaseId = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                }>
                                <option value="0">Choose Phase</option>
                                {phases.map(
                                    (phase) => {
                                        return <option className="form-option" value={`${phase.id}`}>{phase.name}</option>
                                    }
                                )
                                }
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <label htmlFor="cookTime">CookTime:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="How long does it take?"
                                value={recipe.cookTime}
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.cookTime = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Paste image URL here!"
                                value={recipe.image}
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.image = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <div>
                                <label htmlFor="type">Vegan?
                                </label>
                            </div>
                            <select
                                class="form_select"
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.vegan = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                }>
                                <option value="0">?</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <div>
                                <label htmlFor="type">Gluten-Free?
                                </label>
                            </div>
                            <select
                                class="form_select"
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.glutenFree = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                }>
                                <option value="0">?</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">
                            <label htmlFor="directions">Directions:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="How do you make it?"
                                value={recipe.directions}
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(recipe)
                                        copy.directions = evt.target.value
                                        setNewRecipe(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset className="formSection">
                        <div className="form-group">

                            <label>Add Ingredients Here:</label>
                            {formValues.map((element, index) => (
                                <div className="form-inline" key={index}>
                                    <label>Name:     </label>
                                    <input type="text" name="name" value={element.name || ""}
                                        onChange={e => handleChange(index, e)} />
                                    <label>     Quantity:     </label>
                                    <input type="text" name="quantity" value={element.quantity || ""}
                                        onChange={e => handleChange(index, e)} />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={addFormFields}
                            className="add_ingredient_button">
                            New Ingredient
                        </button>
                    </fieldset>
                    <button
                        onClick={(clickEvent) => saveButton(clickEvent)}
                        className="save_button">
                        <div className="inner_button">
                            Submit New Recipe
                        </div>
                    </button>
                </div>
            </div>
        </form >
    </div >
}