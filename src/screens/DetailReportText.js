import { useLocation } from "react-router-dom";
import { OriginDetail, EnDetail, TransDetail } from "~/components/ReportDetail";

export const DetailOriginText = () => {
  const user = useLocation().state;
  return <OriginDetail user={user} />;
};

export const DetailEnText = () => {
  const user = useLocation().state;
  return <EnDetail user={user} />;
};

export const DetailTransText = () => {
  const user = useLocation().state;
  return <TransDetail user={user} />;
};
