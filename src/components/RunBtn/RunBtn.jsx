import { useNavigate } from "react-router-dom";
import Play from "../../assets/play.svg";
import "./RunBtn.scss";
import { useMyContext } from "../../utils/context";
import toast from "react-hot-toast";

const RunBtn = () => {
  const navigate = useNavigate();
  const {areValuesEmpty, userData} = useMyContext()
  return (
    <div 
      className="run__container" 
      onClick={() => {
        if (areValuesEmpty(userData)) {
          toast.error("Fill all credentials")
        } else {
          navigate("/complete")
        }
      }}
    >
      Run
      <span className="run__icon">
        <img src={Play} alt="play" />
      </span>
    </div>
  );
};

export default RunBtn;
