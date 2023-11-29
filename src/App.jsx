import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from './components/navbar';
const App = () => {
  return ( 
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
   );
}
 
export default App;  