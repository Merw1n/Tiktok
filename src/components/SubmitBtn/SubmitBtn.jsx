import "./SubmitBtn.scss"
import Check from "../../assets/check.svg"
import { useNavigate } from "react-router-dom"

const SubmitBtn = () => {
    const navigate = useNavigate()
    return (
        <div className="submit__container" onClick={() => navigate("/waiting")}>
            Submit
            <span className="submit__icon">
                <img src={Check} alt="submit" />
            </span>
        </div>
    )
}

export default SubmitBtn