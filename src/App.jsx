import { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(false);
  const [initialState, setInitialState] = useState(true);

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
    if (initialState) {
      setInitialState(false);
    }
  };

  const toggleAlert = () => {
    setAlert((prev) => !prev);
  };

  useEffect(() => {
    if (!initialState) {
      setAlert(true);
    }
  }, [darkMode]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlert(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [alert]);

  if (darkMode) {
    document.body.style.backgroundColor = "rgb(13,22,33)";
  } else {
    document.body.style.backgroundColor = "rgb(255,255,255)";
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={darkMode} setMode={toggleDark} />
        {alert ? (
          <Alert
            message={`Dark mode is ${darkMode ? "enabled" : "disabled"}`}
            onClose={toggleAlert}
          />
        ) : null}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text below to analyze"
                mode={darkMode}
                setMode={toggleDark}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About mode={darkMode} setMode={toggleDark} />}
          />
          <Route exact path="/profile" element={<></>} />
          <Route exact path="/setting" element={<></>} />
          <Route exact path="/logout" element={<></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
