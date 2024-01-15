import { useRef, useState } from "react";
import AddingItem from "../AddingItem/AddingItem";
import "./TaskInput.scss";
import { useMyContext } from "../../utils/context";

const TaskInput = () => {
  const { userData, activePoint, updateData, setActivePoint } = useMyContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const changeInputValue = (e) => {
    if (!e.target.value.includes(",")) {
      setInputValue(e.target.value);
    }
  };
  const setTextAreaActive = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleComma = (event) => {
    if (event.key === ",") {
      updateData(activePoint, inputValue);
      setInputValue("");
      setActivePoint("")
    }
  };
  console.log(activePoint);
  return (
    <div className="taskinput__container">
      <div className="taskinput__info">
        <h2>What’s your task?</h2>
        <h3>
          Put your input variables in “
          <span className="highlighted__text">{"{{}}"}</span>”
        </h3>
        <h4>
          e.g. Write an email from{" "}
          <span className="highlighted__text">{"{{from}}"}</span> to{" "}
          <span className="highlighted__text">{"{{to}}"}</span> with the
          following tone and style:
          <span className="highlighted__text">{"{{style}}"}</span>. The content
          of the email should be:{" "}
          <span className="highlighted__text">{"{{content}}"}</span>
        </h4>
      </div>
      <div className="taskinput__input__container">
        <div className="taskinput__input__items">
          {Object.keys(userData).map((name, index) => {
            return (
              <AddingItem
                key={index}
                name={name}
                inputValue={inputValue}
                setTextAreaActive={setTextAreaActive}
              />
            );
          })}
        </div>
        <div className="taskinput__input__field">
          {Object.entries(userData).map((entity, index) => {
            return (
              entity[1] && (
                <div key={index} className="taskinput__input__item">
                  <span className="taskinput__input__key">
                    {"{{" + entity[0] + "}} "}
                  </span>
                  <span>{entity[1]}</span>
                </div>
              )
            );
          })}
          {activePoint && (
            <span className="taskinput__input__key">{`{{${activePoint}}} `}</span>
          )}
          <input
            ref={inputRef}
            value={inputValue}
            onChange={changeInputValue}
            onKeyDown={handleComma}
            readOnly={!activePoint}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
