import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
