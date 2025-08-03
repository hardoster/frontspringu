import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import './App.css';


export default function App() {
  return (
    <Router>
     
     
        
     
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Home1" element={<Home1 />} /> 
        
        </Routes>
     
    </Router>
  );
}