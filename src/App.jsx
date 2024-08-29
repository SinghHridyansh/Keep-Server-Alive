import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const backendUrl = [
      "https://eazybytesbackend.onrender.com/",
      "https://cussrutt-workout-tracking-app.onrender.com/",
    ];

    const KeepingServerAlive = () => {
      backendUrl.forEach((url) => {
        fetch("https://cussrutt-workout-tracking-app.onrender.com/")
          .then((response) => {
            console.log("Server is active for ", url);
            console.log("----------------");

            setCount((count) => count + 1);
          })
          .catch((error) => {
            console.log("Failed to ping the server", error);
          });
      });
    };

    KeepingServerAlive();

    const Intervalfunc = setInterval(KeepingServerAlive, 900000);

    return () => clearInterval(Intervalfunc);
  }, []);

  return (
    <>
      <div></div>
      <h1>Keeping Servers Alive!</h1>
      <h4>Fuck you, Render!</h4>

      <p>Requests sent today : {count}</p>
    </>
  );
}

export default App;
