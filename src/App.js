import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import AuthLayout from "./screens/layout/AuthLayout";
// import SettingAdmin from "./screens/SettingAdmin";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AuthLayout />}>
          {/* <Route path="/setting_admin" element={<SettingAdmin />} /> */}
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
