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
        <div className="phase_container">
            <article className="phases">
                <div className="inner_container">
                    <div className="inner_phases">
                        {
                            phases.map(
                                (phase) => {

                                    return <section className="phase">
                                        <h2 className="phaseName"><Link className="phaseName__link" to={`/phase/${phase.id}`}>{phase.name}</Link></h2>
                                        <div className="recipeButton"><Link className="recipeButton" to={`/recipes/${phase.id}`}>Recipes</Link></div></section>
                                }
                            )
                        }
                    </div>
                </div>
            </article>
        </div>
    </>
}

