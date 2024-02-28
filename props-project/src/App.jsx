import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Kalle Anka" age={30} isStudent={true} />
      <Student name="Musse Pigg" age={55} isStudent={false} />
      <Student name="Mimmi Pigg" age={55} isStudent={false} />
      <Student name="Kajsa Anka" age={47} isStudent={true} />
    </div>
  );
}

export default App;
