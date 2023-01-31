import { useLocation } from "react-router-dom";
import EditAppVerDetail from "~/components/EditAppVerDetail";

const EditAppVer = () => {
  const user = useLocation().state;
  return <EditAppVerDetail user={user} />;
};
export default EditAppVer;
