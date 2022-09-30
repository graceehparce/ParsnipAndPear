import { useParams } from "react-router-dom"
import "./phaseInfoGraphic.css"


export const PhaseInfoGraphic = () => {
    const { phaseId } = useParams()

    if (phaseId == 1) {
        return <div className="box5">
            <div className="IGbox">
                <img src="/MIG.jpg" alt="infographic_img" className="infoGraphic" style={{ width: '500px', }} />
            </div>
        </div >
    }
    else if (phaseId == 2) {
        return <div className="box5">
            <div className="IGbox">
                <img src="/FIG.jpg" alt="infographic_img" className="infoGraphic" style={{ width: '500px', }} />
            </div>
        </div>
    }
    else if (phaseId == 3) {
        return <div className="box5">
            <div className="IGbox">
                <img src="/OIG.jpg" alt="infographic_img" className="infoGraphic" style={{ width: '500px', }} />
            </div>
        </div>
    }
    else if (phaseId == 4) {
        return <div className="box5">
            <div className="IGbox">
                <img src="/LIG.jpg" alt="infographic_img" className="infoGraphic" style={{ width: '500px', }} />
            </div>
        </div>

    }

}