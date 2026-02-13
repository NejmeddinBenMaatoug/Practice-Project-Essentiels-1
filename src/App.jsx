import  Header  from "./Components/Header"
import UserInput from "./Components/UserInput"
import { useState } from "react"
import Results from "./Components/Results"

//import InputGroup from "./Components/InputGroup"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 20,
    duration: 5,
  })
  function handleInputChange(inputName, inputValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputName]: +inputValue,
      };
    })
  }
  return (
    <> 
    <Header />  
    <UserInput 
      initialInvestment={userInput.initialInvestment}
      annualInvestment={userInput.annualInvestment}
      expectedReturn={userInput.expectedReturn}
      duration={userInput.duration}
      onInputChange={handleInputChange}
    />
    <Results 
      userInput={userInput}
    />
     </>
  )
}

export default App
