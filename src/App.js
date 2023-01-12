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
import NoticeAppIntro from "~/screens/NoticeAppIntro";
import NoticeAppViewMore from "~/screens/NoticeAppViewMore";
import NoticeUserEmail from "~/screens/NoticeUserEmail";
import SystemSettings from "~/screens/SystemSettings";
import useStyles from "~/styles/App";
import UserAccount from "~/screens/UserAccount";
import MyAccount from "~/screens/MyAccount";
import DetailAccount from "~/components/DetailAccount";
import EditDetailAccount from "~/components/EditDetailAccount";
import History from "~/screens/History";
import MemberStatus from "~/screens/MemberStatus";
import AppVersion from "~/screens/AppVersion";
import NotFound from "~/screens/NotFound";
import EditorTool from "~/components/Editor";
import "~/App.css";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className={classes.root}>
        <SideBar />
        <div className={classes.routesContainer}>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AuthLayout />}>
              {/* <Route path="/setting_admin" element={<SettingAdmin />} /> */}
              <Route
                path="/setting_admin/user_account"
                element={<UserAccount />}
              />
              <Route path="/setting_admin/my_account" element={<MyAccount />} />
              <Route
                path="/setting_admin/detail_account"
                element={<DetailAccount />}
              />
              <Route
                path="/setting_admin/edit_detail_account"
                element={<EditDetailAccount />}
              />
              <Route path="/setting_admin/history" element={<History />} />
              {/* <Route path="/member" element={<Member />} /> */}
              <Route path="/member/member_status" element={<MemberStatus />} />
              {/* <Route path="/service" element={<Service />} /> */}
              <Route path="/service/app_version" element={<AppVersion />} />
              <Route path="/statistics" element={<Statistics />} />
              {/* <Route path="/notice" element={<Notice />} /> */}
              <Route path="/notice/app_intro" element={<NoticeAppIntro />} />
              <Route
                path="/notice/app_viewmore"
                element={<NoticeAppViewMore />}
              />
              <Route path="/notice/user_email" element={<NoticeUserEmail />} />
              <Route path="/system_settings" element={<SystemSettings />} />
              <Route path="/hannah_test" element={<EditorTool />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
