import { useState } from "react";

import Employee from "./Employee";

function App() {
  const [name, setName] = useState("Arnar");

  const updateName = () => {
    setName("Karl Anka");
  };

  return (
    <div>
      <Employee name={name} updateName={updateName} />
    </div>
  );
}

export default App;
