import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import logo from "../images/logo.jpeg"


export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        staff: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("pandp_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.staff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    window.alert("Account with that email address already exists")
                }
                else {
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main className="whole" style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <div className="logo_box">
                    <img src={logo} alt="logo_img" className="logo_nav" style={{ width: '100px', }} />
                </div>
                <h1 className="pleaseRegister">Please Register</h1>
                <fieldset className="inputSection">
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateUser}
                        type="text" id="fullName" className="form-control"
                        placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset className="inputSection">
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset className="inputSection">
                    <input onChange={(evt) => {
                        const copy = { ...user }
                        copy.staff = evt.target.checked
                        setUser(copy)
                    }}
                        type="checkbox" id="staff" />
                    <label htmlFor="email"> I am an employee </label>
                </fieldset>
                <fieldset className="inputSection">
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

