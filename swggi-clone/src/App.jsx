import "./App.css";
import Index from "./component/Index";
import Homepage from "./component/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import AddProducts from "./component/AddProducts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/index" element={<Index/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/addproduct" element={<AddProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
