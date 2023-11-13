/*eslint-disable*/
import {createContext, useContext, useState} from 'react'

const Context = createContext(undefined);

export const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a Provider');
  }
  return context;
};

const AppContext = ({children}) => {
    const [userData, setUserData] = useState({
        from: "",
        to: "",
        style: "",
        content: ""
    })
    const [activePoint, setActivePoint] = useState("")
    const [criterias, setCriterias] = useState([])
    const updateData = (key, text) => {
      setUserData(prevState => ({
        ...prevState,
        [key]: text
      }));
    };
    const addCriteria = (criteria) => {
      setCriterias([...criterias, criteria])
    }
    const deleteCriteria = (criteria) => {
      setCriterias(criterias.filter(item => item !== criteria))
    }
    const areValuesEmpty = (obj) => {
      for (const value of Object.values(obj)) {
        if (typeof value === 'string' && value.trim() === '') {
          return true;
        }
      }
      return false; 
    }
    return (
        <Context.Provider
          value={{
            userData,
            setUserData,
            activePoint,
            setActivePoint,
            updateData,
            addCriteria,
            deleteCriteria,
            criterias,
            areValuesEmpty
          }}
        >
          {children}
        </Context.Provider>
      );
}

export default AppContext