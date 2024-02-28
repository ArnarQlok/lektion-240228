import { useState } from "react";

function Employee({ name, updateName }) {
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedState = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 2)}>Increment age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedState}>Toggle state</button>
    </div>
  );
}

export default Employee;
