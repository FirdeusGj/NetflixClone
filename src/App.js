import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen setUser={setUser}/>
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen setUser={setUser}/>}/>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
