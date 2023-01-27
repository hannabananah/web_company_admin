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
import NotiAppSetting from "~/screens/NotiAppSetting";
import NotiUserEmail from "~/screens/NotiUserEmail";
import SystemSettings from "~/screens/SystemSettings";
import useStyles from "~/styles/App";
import UserAccount from "~/screens/UserAccount";
import UserAccountDetails from "~/screens/UserAccountDetails";
import MyAccount from "~/screens/MyAccount";
import EditMyAccount from "~/screens/EditMyAccount";
import EditDetailAccount from "~/components/EditDetailAccount";
import History from "~/screens/History";
import MemberStatus from "~/screens/MemberStatus";
import SubjectToReport from "~/screens/SubjectToReport";
import BlackList from "~/screens/BlackList";
import AppVersion from "~/screens/AppVersion";
import DetailsAppVer from "~/screens/DetailsAppVer";
import AddAppVer from "~/screens/AddAppVer";
import EditAppVer from "~/screens/EditAppVer";
import EditAppIntroNoti from "~/screens/EditAppIntroNoti";
import NotFound from "~/screens/NotFound";
import EditorTool from "~/components/Editor";
import UserAccountEdit from "~/screens/UserAccountEdit";
import AddUserAccount from "~/screens/AddUserAccount";
import ReportTransError from "~/screens/ReportTransError";
import DashBoard from "~/screens/DashBoard";
import NotiAppIntroAdd from "~/screens/NotiAppIntroAdd";
// import NotiAppSettingAdd from "~/screens/NotiAppSettingAdd";
import DetailIntroNoti from "~/screens/DetailIntroNoti";
import {
  DetailOriginText,
  DetailEnText,
  DetailTransText,
} from "~/screens/DetailReportText";
import DetailSettingNoti from "~/screens/DetailSettingNoti";
import EditAppSettingNoti from "~/screens/EditAppSettingNoti";
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
              <Route path="/dashboard" element={<DashBoard />} />
              {/* <Route path="/setting_admin" element={<SettingAdmin />} /> */}
              <Route
                path="/setting_admin/user_account"
                element={<UserAccount />}
              />
              <Route
                path="/setting_admin/user_account/details/:id"
                element={<UserAccountDetails />}
                handle={{}}
              />

              <Route
                path="/setting_admin/user_account/edit/:id"
                element={<UserAccountEdit />}
              />
              <Route
                path="/setting_admin/user_account/add"
                element={<AddUserAccount />}
              />

              <Route path="/setting_admin/my_account" element={<MyAccount />} />
              <Route
                path="/setting_admin/my_account/edit"
                element={<EditMyAccount />}
              />

              {/* <Route path="/setting_admin/edit_detail_account" element={<EditDetailAccount />} /> */}
              <Route path="/setting_admin/history" element={<History />} />
              {/* <Route path="/member" element={<Member />} /> */}
              <Route path="/member/member_status" element={<MemberStatus />} />
              <Route
                path="/member/subject_report"
                element={<SubjectToReport />}
              />
              <Route path="/member/black_list" element={<BlackList />} />
              {/* <Route path="/service" element={<Service />} /> */}
              {/* 서비스 관리 > App 버전 관리 */}
              <Route path="/service/app_version" element={<AppVersion />} />
              {/* 서비스 관리 > App 버전 관리 > 상세 */}
              <Route
                path="/service/app_version/details"
                element={<DetailsAppVer />}
              />
              {/* 서비스 관리 > App 버전 관리 > 상세 > 수정 */}
              <Route
                path="/service/app_version/details/edit"
                element={<EditAppVer />}
              />
              {/* 서비스 관리 > App 버전 관리 > 등록 */}
              <Route path="/service/app_version/add" element={<AddAppVer />} />
              {/* 서비스 관리 > 번역 이상 신고 */}
              <Route
                path="/service/report_translation_error"
                element={<ReportTransError />}
              />
              {/* 서비스 관리 > 번역 이상 신고 > 원문 텍스트 상세 내용 */}
              <Route
                path="/service/report_translation_error/orgin_contents_details"
                element={<DetailOriginText />}
              />
              {/* 서비스 관리 > 번역 이상 신고 > 1차 번역 영어 텍스트 상세 내용 */}
              <Route
                path="/service/report_translation_error/english_contents_details"
                element={<DetailEnText />}
              />
              {/* 서비스 관리 > 번역 이상 신고 > 번역 텍스트 상세 내용 */}
              <Route
                path="/service/report_translation_error/translation_contents_details"
                element={<DetailTransText />}
              />

              <Route path="/statistics" element={<Statistics />} />
              {/* <Route path="/notice" element={<Notice />} /> */}

              {/* intro 공지 */}
              <Route path="/notice/app_intro" element={<NotiAppIntro />} />
              {/* intro 공지 > 상세 */}
              <Route
                path="/notice/app_intro/details"
                element={<DetailIntroNoti />}
              />
              {/* intro 공지 > 상세 > 수정 */}
              <Route
                path="/notice/app_intro/details/edit"
                element={<EditAppIntroNoti />}
              />
              {/* intro 공지 > 등록 */}
              <Route
                path="/notice/app_intro/add"
                element={<NotiAppIntroAdd />}
              />
              {/* 설정 공지 */}
              <Route path="/notice/app_setting" element={<NotiAppSetting />} />
              {/* 설정 공지 > 상세 */}
              <Route
                path="/notice/app_setting/details"
                element={<DetailSettingNoti />}
              />
              {/* 설정 공지 > 상세 > 수정 */}
              <Route
                path="/notice/app_setting/details/edit"
                element={<EditAppSettingNoti />}
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
