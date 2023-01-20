import { useLocation } from "react-router-dom";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";

const EditAppNoti = () => {
  const user = useLocation().state;
  return <EditAppIntroNotice user={user} />;
};
export default EditAppNoti;
