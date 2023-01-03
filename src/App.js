import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import AuthLayout from "./screens/layout/AuthLayout";
import SettingAdmin from "./screens/SettingAdmin";
import SideBar from "./screens/layout/SideBar";
import Header from "./screens/layout/Header";
import Member from "./screens/Member";
import Service from "./screens/Service";
import Statistics from "./screens/Statistics";
import Notice from "./screens/Notice";
import SystemSettings from "./screens/SystemSettings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthLayout />}>
            <Route path="/setting_admin" element={<SettingAdmin />} />
            <Route path="/member" element={<Member />} />
            <Route path="/service" element={<Service />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/system_settings" element={<SystemSettings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
