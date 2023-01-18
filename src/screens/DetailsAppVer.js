import { useLocation } from "react-router-dom";
import AppDetail from "~/components/AppDetail";

const DetailsAppVer = () => {
  const user = useLocation().state;
  return (
    <AppDetail user={user} />
  )
}
export default DetailsAppVer;