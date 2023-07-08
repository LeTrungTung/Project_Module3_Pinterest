import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeInNotLogin from "./components/HomeInNotLogin/HomeInNotLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeInNotLogin />} />
      </Routes>
    </div>
  );
}

export default App;
