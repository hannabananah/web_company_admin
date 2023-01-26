import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import DetailsAppVer from "~/screens/DetailsAppVer";
import AddAppVersion from "~/components/AddAppVersion";
import AppVersionTable from "~/components/table/AppVersionTable";
import AppDetail from "~/components/AppDetail";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import { UpdateAlertModal } from "~/components/Modal";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global"

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
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const getTotalUserCnt = () => {
    axios
      .get(
        `${g.base_url}api/version/total?s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("getTotalUserCnt:::::", data);
        setTotalUser(data);
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `${g.base_url}api/version/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("changePage::::::::", data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    changePage(page);
    // console.log("page  -------------------->", page);
  };

  const onClickAddVer = () => {
    navigate("/service/app_version/add");
  };

  const onClickTarget = (user) => {
    navigate("/service/app_version/details", { state: user });
  };

  console.log(fetchData);
  // console.log(isLoaded);

  // 필터
  const [selectVal, setSelectVal] = useState("OS");
  const [inputVal, setInputVal] = useState("");

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  // 업데이트 알림 모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (index) => {
    setModalOpen(true);
    setTargetIdx(index);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [targetIdx, setTargetIdx] = useState();
  // console.log('fetchData',fetchData)

  // 업데이트 버튼 활성화 시 버전 업데이트 실행
  const updateAppVersion = (e) => {
    e.preventDefault();

    // console.log("::::::::", fetchData[targetIdx]);
    const newdata = JSON.parse(JSON.stringify(fetchData[targetIdx]));
    newdata.status = "Y";
    newdata.noticeKey = newdata.version_idx;
    axios
      .post(
        `${g.base_url}api/version/update`,

        { ...newdata },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("+-+-+-+-+-", data);
        //  console.log("::::::::: newdata", newdata);
        const new_data = JSON.parse(JSON.stringify(fetchData));
        new_data[targetIdx].status = "Y";
        setFetchData(new_data);

        closeModal();
      });
  };

  useEffect(() => {
    getTotalUserCnt();
    changePage(1);
  }, []);

  const onClickSearch = () => {
    getTotalUserCnt();
    handlePageChange(1);
  };

  return (
    <div className={classes.root}>
      <TableHeader title="App 버전 관리" />
      <FilterSection
        left={
          <>
            <SelectBox
              value={selectVal}
              onChange={onChangeSelect}
              option={option}
            />
            <input
              className={classes.filterInput}
              onChange={handleNameChange}
            />
            <button className={classes.searchBtn} onClick={onClickSearch}>
              검색
            </button>
          </>
        }
        right={
          <button onClick={onClickAddVer} className={classes.saveBtn}>
            등록
          </button>
        }
      />

      <AppVersionTable
        fetchData={fetchData}
        isLoaded={isLoaded}
        onClickTarget={onClickTarget}
        openModal={openModal}
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
      <UpdateAlertModal
        open={modalOpen}
        close={closeModal}
        header="업데이트"
        updateAppVersion={updateAppVersion}
      >
        <main>APP 업데이트를 시작합니다.</main>
      </UpdateAlertModal>
    </div>
  );
};
export default AppVersion;
