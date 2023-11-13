import { useNavigate } from "react-router-dom"
import Back from "../../assets/back.svg"
import "./BackBtn.scss"

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <div className="back__container" onClick={() => navigate("/")}>
            <span className="back__icon">
              <img src={Back} alt="back" />
            </span>
            Back to Home
        </div>
    )
}

export default BackBtn