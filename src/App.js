import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Sidebar />} />
        </Routes>
  
  
    </div>
  );
}

export default App;
