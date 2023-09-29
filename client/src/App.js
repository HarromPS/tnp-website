import React, { useState, } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AdminSignin from "./Components/Auth/AdminSignin";
import AdminRouter from "./Components/Admin/AdminRouter";
// import Signup from "./Components/Signup/Signup";
import VerifyCertificate from "./Components/Admin/Certificate/VerifyCertificate";

export const AdminContext = React.createContext(false);

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <>
        <div className="App">
      {/* <Translate/> */}
          <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/admin/signin" element={<AdminSignin />} />
              <Route path="/admin/console/*" element={<AdminRouter />} />
              {/*<Route path="/user/:action" element={<Signup />} />*/}
              <Route path="/verifycert/:uniqueid" element={<VerifyCertificate />} />
            </Routes>
          </AdminContext.Provider>
        </div>
    </>
  );
}
export default App;
