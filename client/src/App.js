import { Routes, Route } from "react-router-dom";
import { Auth, Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
