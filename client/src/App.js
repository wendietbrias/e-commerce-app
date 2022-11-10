import { Routes, Route } from "react-router-dom";
import { Auth, Home, Favorit, ProfileAdmin, Admin, ProfileUser, Market } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/favorit" index element={<Favorit />} />
        <Route path="/profileadmin" index element={<ProfileAdmin />} />
        <Route path="/profileuser" index element={<ProfileUser />} />
        <Route path="/market" index element={<Market />} />
        <Route path="/admin" index element={<Admin />} />
      </Routes>
      <div>
        
      </div>
    </div>
  );
};

export default App;
