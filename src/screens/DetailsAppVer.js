import { useLocation } from "react-router-dom";
import AppDetailVer from "~/components/AppDetailVer";

const DetailsAppVer = () => {
  const version = useLocation().state;
  return (
    <AppDetailVer version={version} />
  )
}
export default DetailsAppVer;