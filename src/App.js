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
import NotiAppIntro from "~/screens/NotiAppIntro";
import NotiAppViewMore from "~/screens/NotiAppViewMore";
import NotiUserEmail from "~/screens/NotiUserEmail";
import SystemSettings from "~/screens/SystemSettings";
import useStyles from "~/styles/App";
import UserAccount from "~/screens/UserAccount";
import UserAccountDetails from "~/screens/UserAccountDetails";
import MyAccount from "~/screens/MyAccount";
import DetailAccount from "~/components/DetailAccount";
import EditDetailAccount from "~/components/EditDetailAccount";
import History from "~/screens/History";
import MemberStatus from "~/screens/MemberStatus";
import AppVersion from "~/screens/AppVersion";
import DetailsAppVer from "~/screens/DetailsAppVer";
import AddAppVer from "~/screens/AddAppVer";
import EditAppVer from "~/screens/EditAppVer";
import NotFound from "~/screens/NotFound";
import EditorTool from "~/components/Editor";
import UserAccountEdit from "~/screens/UserAccountEdit";
import AddUserAccount from "~/screens/AddUserAccount";
import DashBoard from "~/screens/DashBoard";
import NotiAppIntroAdd from "~/screens/NotiAppIntroAdd";
import DetailIntroNoti from "~/screens/DetailIntroNoti";
import EditAppIntroNotice from "~/screens/EditAppIntroNotice";
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
            <Route path="/dashboard" element={<DashBoard />} />
            <Route element={<AuthLayout />}>
              {/* <Route path="/setting_admin" element={<SettingAdmin />} /> */}
              <Route
                path="/setting_admin/user_account"
                element={<UserAccount />}
              />
              <Route
                path="/setting_admin/user_account/details"
                element={<UserAccountDetails />}
              />
              <Route
                path="/setting_admin/user_account/edit"
                element={<UserAccountEdit />}
              />
              <Route
                path="/setting_admin/user_account/add"
                element={<AddUserAccount />}
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
              <Route path="/service/app_version/details" element={<DetailsAppVer />} />
              <Route path="/service/app_version/details/edit" element={<EditAppVer />} />
              <Route path="/service/app_version/add" element={<AddAppVer />} />

              <Route path="/statistics" element={<Statistics />} />
              {/* <Route path="/notice" element={<Notice />} /> */}

              {/* 공지 */}
              <Route path="/notice/app_intro" element={<NotiAppIntro />} />
              {/* 공지 > 상세 */}
              <Route
                path="/notice/app_intro/details"
                element={<DetailIntroNoti />}
              />
              {/* 공지 > 상세 > 수정 */}
              <Route
                path="/notice/app_intro/details/edit"
                element={<EditAppIntroNotice />}
              />
              {/* 공지 > 등록 */}
              <Route
                path="/notice/app_intro/add"
                element={<NotiAppIntroAdd />}
              />

              <Route
                path="/notice/app_viewmore"
                element={<NotiAppViewMore />}
              />
              <Route path="/notice/user_email" element={<NotiUserEmail />} />
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
