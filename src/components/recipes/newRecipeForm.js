import { useState, useEffect } from "react"



export const NewRecipeForm = () => {

    const [formValues, setFormValues] = useState([{ name: "", quantity: "" }])
    const [phases, setPhases] = useState([])
    const [recipe, setNewRecipe] = useState({
        phaseId: "",
        cookTime: "",
        directions: "",
        name: ""
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
            directions: recipe.directions
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
                        newIngredientArray.forEach((ingredient) => {
                            const foundQuantity = formValues.find((formIngredientObject) => {
                                return ingredient.name === formIngredientObject.name
                            }).quantity
                            createRecipeIngredient(newRecipe.id, ingredient.id, foundQuantity)
                        })
                    })




            })
    }

    let handleChange = (currentIndex, changeEvent) => {
        let newFormValues = [...formValues];
        newFormValues[currentIndex][changeEvent.target.name] = changeEvent.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", quantity: "" }])
    }


    return <form className="newRecipeForm">
        <h2 className="form-group">New Recipe Form</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name?"
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
        <fieldset>
            <div className="form-group">
                <div>
                    <label class="type_title" htmlFor="type">Which Phase?:
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
                            return <option value={`${phase.id}`}>{phase.name}</option>
                        }
                    )
                    }
                </select>
            </div>
        </fieldset>
        <fieldset>
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
        <fieldset>
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
        <fieldset>
            <div className="form-group">

                <h3>Add Ingredients Here:</h3>
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <label>Name</label>
                        <input type="text" name="name" value={element.name || ""}
                            onChange={e => handleChange(index, e)} />
                        <label>Quantity</label>
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
            Submit New Recipe
        </button>
    </form>
}