import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MovieSearch from "./screens/MovieSearch";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      <Router>
        {user ? (
          <LoginScreen setUser={setUser}/>
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen setUser={setUser}/>}/>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search" element={<MovieSearch/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
