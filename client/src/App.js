import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeInNotLogin from "./components/HomeInNotLogin/HomeInNotLogin";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Register_Login_Layout from "./layout/Register_Login_Layout/Register_Login_Layout";
import Banner from "./components/banner/Banner";
import Banner1 from "./components/banner1/Banner1";
import FooterAuth from "./components/Footer/FooterAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeInNotLogin />} />
        <Route
          path="/login"
          element={<Register_Login_Layout children={<Login />} />}
        />
        <Route
          path="/register"
          element={<Register_Login_Layout children={<Register />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
