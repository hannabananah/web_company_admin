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
import axios from "axios";

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

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //더미데이터
  useEffect(() => {
    changePage(1)
  }, []);
  // console.log(fetchData);
  // console.log(isLoaded);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const [selectVal, setSelectVal] = useState("ID");
  const [inputVal, setInputVal] = useState("");

  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log("page  -------------------->", page);
  };

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };
  const onClickAddAccount = () => {
    // AddUserAccount.js
    navigate('/setting_admin/user_account/add')
  }

  const getTotalUserCnt = () => {
    axios
      .get(`http://localhost:3001/api/admin/total?s=${selectVal}&v=${inputVal}`, {
        headers: {
          Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
        },
      })
      .then(({data}) => {
        console.log(data);
        setTotalUser(data.userCount);
        // console.log('totalUser :::::::::::::::', data.userCount)
      });
  }
  
  const changePage = (page) => {
    axios
        .get(`http://localhost:3001/api/admin?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          console.log('changePage data::::::::::::', data);
          setFetchData(data);
        }).then(setIsLoaded(true));
  }


  // UserAccountTable.js 로 이동
  // const onClickTarget = (i) => {
  //   // UserAccountDetails.js
  //   navigate('/setting_admin/user_account/details', { state: i })
  // }

  // const renderHeader = () => {
  //   return (
  //     <tr style={{ borderBottom: "1px solid rgba(188, 191, 204, 0.2)" }}>
  //       <td className={classes.th_td} style={{ }}>번호</td>
  //       <td className={classes.th_td} style={{ }}>아이디</td>
  //       <td className={classes.th_td} style={{ }}>관리자 권한</td>
  //       <td className={classes.th_td} style={{ }}>전화번호</td>
  //       <td className={classes.th_td} style={{ }}>사용여부</td>
  //       <td className={classes.th_td} style={{ }}>최근접속</td>
  //       <td className={classes.th_td} style={{ }}>수정일</td>
  //     </tr>
  //   )
  // }

  // const renderData = fetchData?.users?.slice(0, 10).map((i, index) => {
  //   return (
  //     <tr key={index} className={classes.tableTr}>
  //       <td className={classes.td}>{i.id}</td>
  //       <td onClick={() => onClickTarget(i)} className={`${classes.td} + ${classes.idLink}`}>{i.firstName}</td>
  //       <td className={classes.td}>{i.bloodGroup}</td>
  //       <td className={classes.td}>{i.phone}</td>
  //       <td className={classes.td}><span className={i.gender == "male" ? classes.unuseBtn : classes.useBtn}>{i.gender}</span></td>
  //       <td className={classes.td}>{i.ip}</td>
  //       <td className={classes.td}>{i.birthDate}</td>
  //     </tr>
  //   );
  // })

  const onClickSearch = () => {
    changePage(currentPage)
  }

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
            <button className={classes.searchBtn} onClick={onClickSearch}>검색</button>
          </>
        }
        right={
          <button onClick={onClickAddAccount} className={classes.addBtn}>등록</button>
        }
      />

      {/* <ColumnHeaderTable 
        table_header={renderHeader}   
        table_data={isLoaded && renderData}
      /> */}

      <UserAccountTable
        fetchData={fetchData}
        isLoaded={isLoaded}
      /> 
      
      <Pagination
        activePage={currentPage}
        totalItemsCount={totalUser} // 총 포스트 갯수
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
