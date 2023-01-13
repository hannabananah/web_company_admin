import React from "react";
import TableHeader from "~/components/TableHeader";
import EditDetailAccount from "~/components/EditDetailAccount";

const UserAccountEdit = () => {
  return (
    <div>
      <TableHeader title="계정 정보 수정" /> 
      <EditDetailAccount />
    </div>
  )
}
export default UserAccountEdit;