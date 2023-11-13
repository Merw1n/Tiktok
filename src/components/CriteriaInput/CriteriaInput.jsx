import { useState } from "react";
import "./CriteriaInput.scss"
import { useMyContext } from "../../utils/context";
import Close from "../../assets/close.svg"

const CriteriaInput = () => {
  const {addCriteria, deleteCriteria, criterias} = useMyContext()
  const [inputValue, setInputValue] = useState("")
  const handleInputValue = (e) => {
    if (!e.target.value.includes(",")) {
      setInputValue(e.target.value)
    }
    
  }
  const handleComma = (event) => {
    if (event.key === ',') {
      addCriteria(inputValue)
      setInputValue("")
    }
  };
  return (
    <div className="criteriainput__container">
      <h2>
        What’s your evaluation criteria? <span style={{color: "#CECCCA"}}>(optional)</span>
      </h2>
      <div className="criteriainput__field__container">
        {criterias && criterias.map((criteria, index) => {
          return <div key={index} className="criteriainput__item" onClick={() => deleteCriteria(criteria)}>
            {criteria}
            <span className="criteriainput__delete">
              <img src={Close} alt="close" />
            </span>
          </div>
        })}
        <input value={inputValue} onChange={handleInputValue} onKeyDown={handleComma}/>
      </div>
      <h4>
        separated by comma, e.g. engagement, professionalism, motivated
      </h4>
    </div>
  );
};

export default CriteriaInput;
