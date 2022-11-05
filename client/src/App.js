import { Routes, Route } from "react-router-dom";
import { Auth, Home, Favorit, ProfileAdmin } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favorit" index element={<Favorit />} />
        <Route path="/profileadmin" index element={<ProfileAdmin />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
      <div>
        
      </div>
    </div>
  );
};

export default App;
