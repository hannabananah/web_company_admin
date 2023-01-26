import { useLocation } from "react-router-dom";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";

const EditAppSettingNoti = () => {
  const user = useLocation().state;
  return <EditAppIntroNotice user={user} />;
};
export default EditAppSettingNoti;
