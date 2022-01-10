import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import firebase from "./firebase";
function App() {
  const { REACT_APP_VAPID_KEY } = process.env;
  const publicKey = REACT_APP_VAPID_KEY;
  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .getToken({ vapidKey: publicKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken, "currentToken");
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
