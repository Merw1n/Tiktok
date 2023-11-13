/* eslint-disable */
import "./AddingItem.scss";
import Plus from "../../assets/plus.svg";
import { useMyContext } from "../../utils/context";
import Close from "../../assets/close.svg"

const AddingItem = ({
  name,
  setTextAreaActive
}) => {
  const { setActivePoint, userData, setUserData } = useMyContext();
  return (
    <div
      className="adding__container"
      onClick={() => {
        setTextAreaActive();
        setActivePoint(name);
        if (userData[name]) {
          setUserData({...userData, [name]: ""})
          setActivePoint("");
        }
      }}
    >
      {`{{${name}}}`}
      <span className="adding__plus">
        <img src={userData[name] ? Close : Plus} alt="plus" />
      </span>
    </div>
  );
};

export default AddingItem;
