import BackBtn from "../../components/BackBtn/BackBtn";
import GeneratedText from "../../components/GeneratedText/GeneratedText";
import SelectedCreds from "../../components/SelectedCreds/SelectedCreds";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import { useMyContext } from "../../utils/context";
import "./FinishPage.scss"

const FinishPage = () => {
    const {userData} = useMyContext()
    return (
        <div className="finishpage__container">
            <BackBtn />
            <GeneratedText />
            <div className="finishpage__creds__container">
                <div className="finishpage__creds">
                    {Object.entries(userData).map((entity, index) => {
                        return <SelectedCreds name={entity[0]} value={entity[1]} key={index}/>
                    })}
                </div>
                <SubmitBtn />
            </div>
        </div>
    )
}

export default FinishPage;