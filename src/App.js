import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/SharedPage/Footer/Footer";
import Navebar from "./Pages/SharedPage/Navebar/Navebar";
import NotFound404 from "./Pages/SharedPage/NotFound404/NotFound404";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound404></NotFound404>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
