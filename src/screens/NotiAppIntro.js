import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import NoticeIntroTable from "~/components/table/NoticeIntroTable";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import SearchInput from "~/components/SearchInput";
import { NoticeAlertModal } from "~/components/Modal";
import { SearchBtn, SaveBtn } from "~/components/button/Buttons";

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

const NotiAppIntro = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const onClickAddNoti = () => {
    // NotiAppIntroAdd.js
    navigate("/notice/app_intro/add");
  };

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 필터
  const [selectVal, setSelectVal] = useState("os");
  const [inputVal, setInputVal] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getTotalUserCnt();
    changePage(page);
    // console.log("page  -------------------->", page);
  };
  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };
  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  // 공지활성화 알림 모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (index) => {
    setModalOpen(true);
    setTargetIdx(index);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [targetIdx, setTargetIdx] = useState();

  const getTotalUserCnt = () => {
    axios
      .get(
        `http://localhost:3001/api/admin/total?s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setTotalUser(data);
        console.log('totalUser :::::::::::::::', data)
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `http://localhost:3001/api/notice/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("changePage data::::::::::::", data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  // 공지 버튼 활성화 시 Live 실행
  const activeNotice = (e) => {
    e.preventDefault();

    // console.log("::::::::", fetchData[targetIdx]);
    const newdata = JSON.parse(JSON.stringify(fetchData[targetIdx]));
    newdata.status = "Y";
    newdata.noticeKey = newdata.noti_idx;
    axios
      .post(
        `http://localhost:3001/api/notice/update`,

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

  return (
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
            <SearchInput handleNameChange={handleNameChange} />
            <SearchBtn changePage={changePage} />
          </>
        }
        right={<SaveBtn onClick={onClickAddNoti} />}
      />

      <NoticeIntroTable
        fetchData={fetchData}
        isLoaded={isLoaded}
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
      <NoticeAlertModal
        open={modalOpen}
        close={closeModal}
        header="공지 활성화"
        activeNotice={activeNotice}
      >
        <main>App Intro 공지를 노출합니다.</main>
      </NoticeAlertModal>
    </div>
  );
};
export default NotiAppIntro;
