import { Routes, Route } from "react-router-dom";
import { Auth, Home } from "./pages";
import { Cart } from "./pages";  
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route index element={<Cart/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route index element={<Checkout/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route index element={<Detail/>}/>
        <Route path="/Detail" element={<Detail/>}/>
      </Routes>
    </div>
  );
};

export default App;
