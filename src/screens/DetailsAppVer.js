import { useLocation } from "react-router-dom";
import AppDetailVer from "~/components/AppDetailVer";

const DetailsAppVer = () => {
  const user = useLocation().state;
  return (
    <AppDetailVer user={user} />
  )
}
export default DetailsAppVer;