/*eslint-disable*/
import "./SelectedCreds.scss"

const SelectedCreds = ({name, value}) => {
    return (
        <div className="creds__container">
            <span className="creds__label">
                {name}:
            </span>
            <div className="creds__field">
                {value}
            </div>
        </div>
    )
}

export default SelectedCreds