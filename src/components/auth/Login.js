import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import logo from "../images/logo.jpeg"



export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("pandp_user", JSON.stringify({
                        id: user.id,
                        staff: user.staff
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return <div className="whole">
        <main className="whole_page">
            <section className="container--login">
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="logo_box">
                        <img src={logo} alt="logo_img" className="logo_nav" style={{ width: '150px', }} />
                    </div>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link className="link--register" to="/register">Not a member yet?</Link>
            </section>
        </main>
    </div>

}

