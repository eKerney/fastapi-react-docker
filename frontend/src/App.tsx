import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/") // Must use "backend" for Docker networking
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="App">
      <h1>React + Vite + TypeScript</h1>
      <p>Backend says: {message || "Loading..."}</p>
    </div>
  );
}

export default App;
