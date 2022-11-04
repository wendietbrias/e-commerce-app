import { Routes, Route } from "react-router-dom"; 
import { Auth } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
