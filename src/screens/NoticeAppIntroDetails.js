import TableHeader from "~/components/TableHeader";
import DetailNoti from "~/components/DetailNoti";
import { useLocation } from "react-router-dom";

const NoticeAppIntroDetails = () => {
  const data = useLocation().state;
  // console.log('data---->', data)

  return (
    <div>
      <TableHeader title="App Intro 공지 상세" /> 
      <DetailNoti user={data} />
    </div>
  )
}
export default NoticeAppIntroDetails