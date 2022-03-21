import React, { useEffect } from "react";
import "./App.css";

declare global {
  interface Window {
    MyNamespace: any;
  }
}

function App() {
  useEffect(() => {
    console.log("react app loaded", window);
    const customWindow: any = window;
    const result = customWindow.keplr.enable("cosmoshub-4");
    console.log("result", result);
  }, []);
  return <div className="App">Welcom to simple connect wallet app</div>;
}

export default App;
