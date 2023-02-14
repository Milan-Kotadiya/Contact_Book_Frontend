import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import Single from "./Components/Single";
import Edit from "./Components/Edit";
import Validate from "./Components/Validate";


const App = () => {
  return (
    <BrowserRouter>
     <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
      <Route element={<Validate />}>
          <Route path="/" element={<Home />}/>
          <Route path="/contact/:id" element={<Single/>} />
          <Route path="/contact/edit/:id" element={<Edit/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
