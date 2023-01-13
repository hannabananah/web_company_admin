import { useLocation } from "react-router-dom";
import DetailAccount from "~/components/DetailAccount";
import TableHeader from "~/components/TableHeader";

const UserAccountDetails = () => {
  const user = useLocation().state;
  
  return (
    <div>
      <TableHeader title="계정 상세" /> 
      <DetailAccount user={user} />
    </div>
  )
}
export default UserAccountDetails;