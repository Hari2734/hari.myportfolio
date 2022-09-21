import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import User from "./pages/users/user";
import Singleuser from "./pages/users/singleuser/singleuser";
import Listresource from "./pages/resource/listresorce";
import Singleresource from "./pages/resource/singleresource";
import Header from "./component/Header";
import Create from "./pages/create/create";
import Update from "./pages/update/update";
import Register from "./pages/register/register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/about/:id" element={<FirstTask />} /> */}
          <Route path="/listuser" element={<User/>} />
          <Route path="/singleuser/:id" exact element={<Singleuser/>} />
          <Route path="/Listresource" exact element={<Listresource/>} />
          <Route path="/Singleresource/:id" exact element={<Singleresource/>} />
          <Route path="/Create" exact element={<Create/>} />
          <Route path="/Update/:id" exact element={<Update/>} />
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
