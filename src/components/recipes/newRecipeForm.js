import { useState, useEffect } from "react"



export const NewRecipeForm = () => {

    const [formValues, setFormValues] = useState([{ name: "", quantity: "" }])


    const [phases, setPhases] = useState([])
    const [ingredients, setIngredients] = useState([])

    const [ingredient, setNewIngredient] = useState({
        name: ""
    })

    const [recipeIngredient, setNewRI] = useState({
        recipeId: "",
        ingredientId: "",
        quantity: ""
    })

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


    useEffect(
        () => {
            fetch('http://localhost:8088/ingredients')
                .then(response => response.json())
                .then((ingredientsArray) => {
                    setIngredients(ingredientsArray)
                })
        },
        []
    )

    const addNewIngredientField = () => {
        return <fieldset>
            <div className="form-group">
                <label htmlFor="ingredients">Add Ingredient:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="What's in it?"
                    value={ingredient.name}
                    onChange={
                        (evt) => {
                            const copy = structuredClone(ingredient)
                            copy.name = evt.target.value
                            setNewIngredient(copy)
                        }
                    } />
            </div>
            <div className="form-group">
                <label htmlFor="ingredient_quantity">Quantity:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="How much?"
                    value={recipeIngredient.quantity}
                    onChange={
                        (evt) => {
                            const copy = structuredClone(recipeIngredient)
                            copy.quantity = evt.target.value
                            setNewRI(copy)
                        }
                    } />
            </div>
            <button
                onClick={(clickEvent) => addNewIngredientField(clickEvent)}
                className="add_ingredient_button">
                +
            </button>
        </fieldset>
    }




    // const FindOrCreateIngredient = (evtName) => {




    //     const foundIngredient = ingredients.find((ingredient) => { return ingredient.name === evtName })

    //     {
    //         if (foundIngredient) {
    //             return RIToSendToAPI.ingredientId === foundIngredient.id
    //         }
    //         else {
    //             fetch("http://localhost:8088/ingredients", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(IngredientToSendToAPI)
    //             })
    //                 .then(response => response.json())
    //         }
    //     }
    // }



    const saveButton = (event) => {
        event.preventDefault()
        /*
        1. create an object for the recipe
        2.create an object for the ingredient
        3.post recipe to json server and capture response
        4.post ingredient and capture response
        5.create recipe ingredient object using the pk from previous fetch calls
        6.post recipe ingredient object to json server
        */

        const recipeToSendToAPI = {
            phaseId: recipe.phaseId,
            name: recipe.name,
            cookTime: recipe.cookTime,
            directions: recipe.directions
        }


        fetch("http://localhost:8088/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeToSendToAPI)
        })
            .then(response => response.json())
            .then(newRecipe => {

                const IngredientToSendToAPI = {
                    name: ingredient.name
                }

                fetch("http://localhost:8088/ingredients", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(IngredientToSendToAPI)
                })
                    .then(response => response.json())
                    .then(newIngredient => {

                        const RIToSendToAPI = {
                            quantity: recipeIngredient.quantity
                        }
                        RIToSendToAPI.ingredientId = newIngredient.id
                        RIToSendToAPI.recipeId = newRecipe.id



                        fetch("http://localhost:8088/recipeIngredients", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(RIToSendToAPI)
                        })
                            .then(response => response.json())
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















                <label htmlFor="ingredients">Add Ingredient:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="What's in it?"
                    value={ingredient.name}
                    onChange={
                        (evt) => {
                            const copy = structuredClone(ingredient)
                            copy.name = evt.target.value
                            setNewIngredient(copy)
                        }
                    } />
            </div>
            <div className="form-group">
                <label htmlFor="ingredient_quantity">Quantity:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="How much?"
                    value={recipeIngredient.quantity}
                    onChange={
                        (evt) => {
                            const copy = structuredClone(recipeIngredient)
                            copy.quantity = evt.target.value
                            setNewRI(copy)
                        }
                    } />
            </div>
            <button
                onClick={addFormFields}
                className="add_ingredient_button">
                +
            </button>
        </fieldset>
        <button
            onClick={(clickEvent) => saveButton(clickEvent)}
            className="save_button">
            Submit New Recipe
        </button>
    </form>
}