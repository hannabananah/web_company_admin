import { useLocation } from "react-router-dom";
import TableHeader from "~/components/TableHeader";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";

const NoticeAppIntroDetailsEdit = () => {
  const user = useLocation().state;
  // console.log('data---->', data)

  return (
    <div>
      <TableHeader title="App Intro 공지 수정" /> 
      <EditAppIntroNotice user={user} />
    </div>
  )
}
export default NoticeAppIntroDetailsEdit