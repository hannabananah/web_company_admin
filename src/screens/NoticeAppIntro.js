import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import SearchInput from "~/components/SearchInput";
import { SearchBtn, SaveBtn } from "~/components/button/Buttons";
import "~/styles/Toggle.css";
import AppNotiAdd from "~/components/AddAppNotification";
import NoticeIntroTable from "~/components/table/NoticeIntroTable";
import DetailNoti from "~/components/DetailNoti";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// filter select option
const option = [
  {
    value: "os",
    name: "OS",
  },
  {
    value: "emergency",
    name: "긴급",
  },
  {
    value: "normal",
    name: "일반",
  },
];

const NoticeAppIntro = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const backState = () => {
    setAdd(false); //등록 화면 -> 디폴트 페이지
  };

  const onClickAddNoti = () => {
    navigate('/notice/app_intro/add')
  }
  const changeState = () => {
    setAdd(true); // 디폴트 페이지 -> 등록 화면
  };

  //타인 계정 상세보기
  const [editAcc, setEditAcc] = useState(false);
  const [totalUser, setTotalUser] = useState(0); //임시
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getTotalUserCnt = () => {
    axios
        .get(`http://localhost:3001/api/notice/total?s=${selectVal}&v=${inputVal}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          console.log(data);
          setTotalUser(data.userCount);

        });
  }

  const changePage = (page) => {
    axios
        .get(`http://localhost:3001/api/notice?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          console.log(data);
          setFetchData(data);
        }).then(setIsLoaded(true));
  }


  //더미데이터
  useEffect(() => {
    changePage(1);
  }, []);

  const onClickTarget = (user) => {
    setEditAcc(true);
    setUser(user);
  };
  const goBackTable = () => {
    setEditAcc(false);
  };

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log("page  -------------------->", page);
  };
  // 필터
  const [selectVal, setSelectVal] = useState("os");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <AppNotiAdd backState={backState} />
      ) : editAcc ? (
        <DetailNoti backState={goBackTable} user={user} />
      ) : (
        <div className={classes.root}>
          <TableHeader title="App Intro 공지" />
          <FilterSection
            left={
              <>
                <SelectBox
                  value={selectVal}
                  onChange={onChangeSelect}
                  option={option}
                />
                <SearchInput />
                <SearchBtn />
              </>
            }
            right={<SaveBtn onClick={onClickAddNoti} />}
            // right={<SaveBtn changeState={changeState} />}
          />
          <NoticeIntroTable
            fetchData={fetchData}
            isLoaded={isLoaded}
            // changeState={changeState}
            user={user}
            setUser={setUser}
            // onClickTarget={onClickTarget}
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
      )}
    </div>
  );
};
export default NoticeAppIntro;
