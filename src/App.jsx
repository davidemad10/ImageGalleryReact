import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check local storage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Save theme preference to local storage
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? "" : "light"; // Add light class if not dark mode
  }, [isDarkMode]);

  return (
    <>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <ImageGallery></ImageGallery>
    </>
  );
}

export default App;
