import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from "react";
import "./App.css";
import BaseLayout from './components/BaseLayout';

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="App">
      <div >
        <p>Backend says: {message || "Loading..."}</p>
      </div>
      <BaseLayout />
    </div>
  );
}

export default App;
