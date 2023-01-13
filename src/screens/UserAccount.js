import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import UserAccountTable from "~/components/table/UserAccountTable";
import DetailAccount from "~/components/DetailAccount";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import TableHeader from "~/components/TableHeader";
import ColumnHeaderTable from "~/components/table/ColumnHeaderTable";

const table_header = [
  {
    title:"번호",
    width:"40px",
  },
  {
    title:"아이디",
    width:"140px",
  },
  {
    title:"관리자 권한",
    width:"100px",
  },
  {
    title:"전화번호",
    width:"120px",
  },
  {
    title:"사용여부",
    width:"60px",
  },
  {
    title:"최근 접속",
    width:"150px",
  },
  {
    title:"수정일",
    width:"150px",
  },
] 

// filter select option
const option = [
  {
    value: "ID",
    name: "아이디",
  },
  {
    value: "name",
    name: "사용자명",
  },
  {
    value: "phone",
    name: "전화번호",
  },
];

const UserAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const [user, setUser] = useState([]);

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //더미데이터
  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);
  console.log(fetchData);
  // console.log(isLoaded);

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log("page  -------------------->", page);
  };

  // 필터
  const [selectVal, setSelectVal] = useState("ID");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };
  const onClickAddAccount = () => {
    // AddUserAccount.js
    navigate('/setting_admin/user_account/add')
  }

  const onClickTarget = (i) => {
    // UserAccountDetails.js
    navigate('/setting_admin/user_account/details', { state: i })
  }

  const renderHeader = table_header.map((item, index)=>{
    return <td key={index} className={classes.th_td} style={{ width: item.width }}>{item.title}</td>
  })

  const renderData = fetchData?.users?.slice(0, 10).map((i, index) => {
    return (
      <tr key={index} className={classes.tableTr}>
        <td className={classes.td}>{i.id}</td>
        <td onClick={() => onClickTarget(i)} className={`${classes.td} + ${classes.idLink}`}>{i.firstName}</td>
        <td className={classes.td}>{i.bloodGroup}</td>
        <td className={classes.td}>{i.phone}</td>
        <td className={classes.td}><span className={i.gender == "male" ? classes.unuseBtn : classes.useBtn}>{i.gender}</span></td>
        <td className={classes.td}>{i.ip}</td>
        <td className={classes.td}>{i.birthDate}</td>
      </tr>
    );
  })

  return (
    <div className={classes.root}>
      <TableHeader title="계정관리" />

      <FilterSection
        left={
          <>
            <SelectBox
              value={selectVal}
              onChange={onChangeSelect}
              option={option}
            />
            <input className={classes.filterInput} />
            <button className={classes.searchBtn}>검색</button>
          </>
        }
        right={
          <button onClick={onClickAddAccount} className={classes.addBtn}>등록</button>
        }
      />
      <ColumnHeaderTable 
        table_header={renderHeader}   
        table_data={isLoaded && renderData}
      />

      {/* <UserAccountTable
        fetchData={fetchData}
        isLoaded={isLoaded}
        // user={user}
        // setUser={setUser}
      />  */}
      
      <Pagination
        activePage={currentPage}
        totalItemsCount={postsPerPage * totalPage} // 총 포스트 갯수
        itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
        pageRangeDisplayed={10} // 페이저 갯수
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default UserAccount;
