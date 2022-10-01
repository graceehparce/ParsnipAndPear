import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
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
        <div className="phaseBox">
            <div className="boxWithButton">
                <div className="firstBox">
                    <div className="picTitle">Let's learn about...</div>
                    <div className="title7">
                        <div className="picTitle">The </div>
                        <img className="phasePicBox2" src={phase.titleImg} alt=""></img>
                        <div className="picTitle">Phase</div>
                    </div>
                </div>
            </div>
            <div className="pTitleBox">
                <div className="basicsBox">
                    <div className="phaseName">The Basics</div>
                    <div className="infoPBox1">{phase.basics}</div>
                </div>
                <div className="pBox1">
                    <img src="/cycleVisual.jpg" alt="" className="cycleVisual" style={{ width: '300px', }} />
                </div>
            </div>
        </div>
        <div className="dividingLine"></div>
        <div className="pBox1">
            <img className="phasePicBox" src={phase.foodImg} alt=""></img>
            <div className="infoPBox">
                <h3 className="pQuestion">What should you eat? </h3>
                <div className="infoPBoxinner">{phase.nutrition}</div>
            </div>
        </div>
        <div className="pBox2">
            <img className="phasePicChart" src={phase.chartImg} alt=""></img>
        </div>
        <div className="dividingLine2"></div>

        <div className="pBox1">
            <div className="infoPBox">
                <h3 className="pQuestion">How should you move your body?</h3>
                <div className="inner">{phase.exercise}</div>
            </div>
            <img className="phasePicBox" src={phase.exerciseImg} alt=""></img>
        </div>
        <div className="pBox1">
            <img className="phasePicBox" src={phase.cycleImg} alt=""></img>
            <div className="infoPBox">
                <h3 className="pQuestion">How might you be feeling? </h3>
                <div className="inner">{phase.social}</div>
            </div>
        </div>
        <Link className="phaseInfoGraphicLink" to={`/phaseInfoGraphic/${phase.id}`}>Need help? Click here to see our top 5 tips!</Link>

        <div className="dividingLine2"></div>
    </section >
}
