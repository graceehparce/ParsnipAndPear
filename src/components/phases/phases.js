import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./phases.css"


export const Phases = () => {

    const navigate = useNavigate()
    const [phases, setPhases] = useState([])

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

    return <>
        <article className="phases">
            {
                phases.map(
                    (phase) => {

                        return <section className="phase">
                            <h2><Link className="phaseName" to={`/phase/${phase.id}`}>{phase.name}</Link></h2>
                            <div><Link className="recipeButton" to={`/recipes/${phase.id}`}>Recipes</Link></div></section>
                    }
                )
            }
        </article>

    </>
}

