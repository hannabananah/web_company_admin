import { useEffect, useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import AddAppVersion from "~/components/AddAppVersion";
import AppVersionTable from "~/components/table/AppVersionTable";
import AppDetail from "~/components/AppDetail";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import { AlertModal } from "~/components/Modal";
import axios from "axios";

// filter select option
const option = [
  {
    value: "OS",
    name: "OS",
  },
  {
    value: "store",
    name: "스토어",
  },
];

const AppVersion = () => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState([]);
  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const getTotalUserCnt = () => {
    axios
        .get(`http://localhost:3001/api/version/total?s=${selectVal}&v=${inputVal}`, {
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
        .get(`http://localhost:3001/api/version/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`, {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  const backState = () => {
    setAdd(false); //등록 화면 -> 디폴트 페이지
  };

  const changeState = () => {
    setAdd(true); // 디폴트 페이지 -> 등록 화면
  };

  //타인 계정 상세보기
  const [editAcc, setEditAcc] = useState(false);

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  console.log(fetchData);
  console.log(isLoaded);

  // 필터
  const [selectVal, setSelectVal] = useState("OS");
  const [inputVal, setInputVal] = useState("");

  const handleNameChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  // 업데이트 알림 모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <AddAppVersion backState={backState} />
      ) : editAcc ? (
        <AppDetail backState={goBackTable} user={user} />
      ) : (
        <div className={classes.root}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>App 버전 관리</h2>
          </section>

          <FilterSection
            left={
              <>
                <SelectBox
                  value={selectVal}
                  onChange={onChangeSelect}
                  option={option}
                />
                <input className={classes.filterInput} onChange={handleNameChange} />
                <button className={classes.searchBtn}>검색</button>
              </>
            }
            right={
              <button onClick={changeState} className={classes.saveBtn}>
                등록
              </button>
            }
          />

          <AppVersionTable
            fetchData={fetchData}
            isLoaded={isLoaded}
            user={user}
            setUser={setUser}
            onClickTarget={onClickTarget}
            openModal={openModal}
          />
          <Pagination
            activePage={currentPage}
            totalItemsCount={postsPerPage * totalPage} // 총 포스트 갯수
            itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
            pageRangeDisplayed={10} // 페이저 갯수
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
          <AlertModal open={modalOpen} close={closeModal} header="업데이트">
            <main>APP 업데이트를 시작합니다.</main>
          </AlertModal>
        </div>
      )}
    </div>
  );
};
export default AppVersion;
