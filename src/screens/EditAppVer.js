import { useLocation } from "react-router-dom";
import EditAppDetail from "~/components/EditAppDetail";

const EditAppVer = () => {
  const user = useLocation().state;
  return (
    <EditAppDetail user={user} />
  )
}
export default EditAppVer;