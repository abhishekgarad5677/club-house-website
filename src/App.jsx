import "./App.css";
import DefaultPage from "./pages/DefaultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative w-full h-full">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<DefaultPage />} />
            <Route path="/" element={<DefaultPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
