import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 6,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const appIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {appIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
