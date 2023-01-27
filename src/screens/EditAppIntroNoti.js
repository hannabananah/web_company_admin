import { useLocation } from "react-router-dom";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";

const EditAppIntroNoti = () => {
  const user = useLocation().state;
  return <EditAppIntroNotice user={user} />;
};
export default EditAppIntroNoti;
