import "./GeneratedText.scss"
import Avatar from "../../assets/avatar.svg"

const GeneratedText = () => {
    return (
        <div className="generated__container">
            <span className="generated__avatar">
                <img src={Avatar} alt="avatar" />
            </span>
            <div className="generated__text">
                Dear Prof Y,<br/>
                I hope this email finds you well. My name is Amy, a student currently enrolled in CS61A and I am writing to formally request to
                drop this course. After careful consideration and reviewing my current academic and personal commitments, I`ve concluded
                that it is in my best interest to withdraw from this class at this time.
            </div>
        </div>
    )
}

export default GeneratedText;