import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
  const [user, setUser] = useState(false)
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen setUser={setUser}/>
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
