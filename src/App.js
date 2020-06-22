import React, {useState, useEffect} from "react";
import Post from "./Post/Post"
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState('');
  console.log(nasaData)

  useEffect(() => { 
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=1aPmHhhSA3MBASpffCGIvQKFPQABi9VdZv6tAdfN")
      .then(res => {
        setNasaData(res.data);
      })
  }, [])

  return (
    <div className="App">
      <Post username={nasaData.copyright} image={nasaData.url} date={nasaData.date} title={nasaData.title} explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
