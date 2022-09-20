import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./ingredientEdit.css"




export const IngredientEdit = () => {

    const navigate = useNavigate()
    const { userIngredientId } = useParams()
    const [userIngredient, setUserIngredient] = useState({})
    const [updatedUI, updateUserIngredient] = useState({
        userId: userIngredient.userId,
        ingredientId: userIngredient.ingredientId,
        quantity: ""
    })

    useEffect(
        () => {
            fetch(`http://localhost:8088/userIngredients?_expand=ingredient&id=${userIngredientId}`)
                .then(response => response.json())
                .then((UIObject) => {
                    setUserIngredient(UIObject[0])
                    updateUserIngredient(UIObject[0])
                })
        },
        [userIngredientId])


    const updateQuantity = (event) => {
        event.preventDefault()
        return fetch(`http://localhost:8088/userIngredients/${userIngredientId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUI)
        })
            .then(response => response.json())
            .then((UIObject) => {
                navigate(`/shoppingList`)
            })
    }

    return <section className="editBox1">
        <div className="editBox2">
            <div className="editBox3">
                <div className="editBox4">
                    <div className="outer_edit_title">
                        <div className="edit_heading">
                            <h3 className="edit_name">{userIngredient.ingredient?.name}</h3>
                        </div>
                    </div>
                    <fieldset>
                        <div className="form-group">
                            <label className="label" htmlFor="quantity">How Much Do You Need?</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder={updatedUI.quantity}
                                value={updatedUI.quantity}
                                onChange={
                                    (evt) => {
                                        const copy = structuredClone(updatedUI)
                                        copy.quantity = evt.target.value
                                        updateUserIngredient(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <button
                        className="update_button"
                        onClick={updateQuantity}>Update
                    </button>
                </div>
            </div>
        </div>
    </section>
}