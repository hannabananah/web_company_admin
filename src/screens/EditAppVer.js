import { useLocation } from "react-router-dom";
import EditAppDetail from "~/components/EditAppDetail";

const EditAppVer = () => {
  const version = useLocation().state;
  return <EditAppDetail user={version} />;
};
export default EditAppVer;
