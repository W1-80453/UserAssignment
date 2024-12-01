import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
