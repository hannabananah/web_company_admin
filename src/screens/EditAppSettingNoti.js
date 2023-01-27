import { useLocation } from "react-router-dom";
import EditAppSettingNotice from "~/components/EditAppSettingNotice";

const EditAppSettingNoti = () => {
  const user = useLocation().state;
  return <EditAppSettingNotice user={user} />;
};
export default EditAppSettingNoti;
