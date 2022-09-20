import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./phaseDetails.css"

export const PhaseProfile = () => {
    const { phaseId } = useParams()

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

    return <section className="flexContainer">
        <section classname="phaseProfile">
            <div className="profileBox1">
                <div className="profileBox2">
                    <div className="profileBox3">
                        <h2 classname="phaseName">{phase?.name} Phase</h2>
                        <h3>What is it?</h3>
                        <div>{phase.basics}</div>
                        <h3>What should you eat? </h3>
                        <div>{phase.nutrition}</div>
                        <h3>How should you move your body?</h3>
                        <div>{phase.exercise}</div>
                        <h3>How might you be feeling? </h3>
                        <div>{phase.social}</div>
                    </div>
                </div>
            </div>
        </section>
    </section>
}
