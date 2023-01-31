import { useLocation } from "react-router-dom";
import EditAppVerDetail from "~/components/EditAppVerDetail";

const EditAppVer = () => {
  const version = useLocation().state;
  return <EditAppDetail user={version} />;
};
export default EditAppVer;
