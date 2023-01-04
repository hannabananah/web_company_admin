import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "~/screens/Login";
import AuthLayout from "~/screens/layout/AuthLayout";
import SettingAdmin from "~/screens/SettingAdmin";
import SideBar from "~/screens/layout/SideBar";
import Header from "~/screens/layout/Header";
import Member from "~/screens/Member";
import Service from "~/screens/Service";
import Statistics from "~/screens/Statistics";
import Notice from "~/screens/Notice";
import SystemSettings from "~/screens/SystemSettings";
import useStyles from "~/styles/App";
import UserAccount from "~/screens/UserAccount";
import MyAccount from "~/screens/MyAccount";
import DetailAccount from "~/components/DetailAccount";
import History from "~/screens/History";
import MemberStatus from "~/screens/MemberStatus";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.root}>
        <SideBar />
        <div className={classes.routesContainer}>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route element={<AuthLayout />}> */}
            <Route path="/setting_admin" element={<SettingAdmin />} />
            <Route
              path="/setting_admin/user_account"
              element={<UserAccount />}
            />
            <Route path="/setting_admin/my_account" element={<MyAccount />} />
            {/*  */}
            <Route path="/setting_admin/detail_account" element={<DetailAccount />} />
            <Route path="/setting_admin/history" element={<History />} />
            <Route path="/member" element={<Member />} />
            <Route path="/member/member_status" element={<MemberStatus />} />
            <Route path="/service" element={<Service />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/system_settings" element={<SystemSettings />} />
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
