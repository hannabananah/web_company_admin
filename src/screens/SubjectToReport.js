import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import axios from "axios";
import TableHeader from "~/components/TableHeader";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import ReportAccTable from "~/components/table/ReportAccTable";
import Pagination from "react-js-pagination";
import { g } from "~/util/global";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";

// filter select option
const option = [
  {
    value: "phone_no",
    name: "전화번호",
  },
  {
    value: "email",
    name: "이메일",
  },
];

const SubjectToReport = () => {
  const classes = useStyles();
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // 필터
  const [selectVal, setSelectVal] = useState("phone_no");
  const [inputVal, setInputVal] = useState("");
  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);
  const [targetUser, setTargetUser] = useState();

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const onChangeSelect = (event) => {
    console.log(event.target.value);
    setSelectVal(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    changePage(page);
    // console.log("page  -------------------->", page);
  };

  const getTotalUserCnt = () => {
    axios
      .get(`${g.base_url}api/warning/total?s=${selectVal}&v=${inputVal}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // console.log('getTotalUserCnt________',data);
        setTotalUser(data);
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `${g.base_url}api/warning/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  useEffect(() => {
    getTotalUserCnt();
    changePage(1);
  }, []);




  // 계정 휴면
  const onClickDormancy = (user) => {
    setSaveConfirm(true)
    setTargetUser(user)
    // axios
    //   .post(
    //     `${g.base_url}api/warning/update`, 
    //     {
    //       warning_his_seq : user.warning_his_seq,
    //       state: 1
    //     },
    //     {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("access_token"),
    //       },
    //     }
    //   )
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
  }

  const handleSubmit = () => {
    setSaveConfirm(false);
    console.log('targetUser ------>',targetUser)

    axios
      .post(
        `${g.base_url}api/warning/update`, 
        {
          warning_his_seq : targetUser.warning_his_seq,
          state: 1
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        openModal();
      })
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setTargetUser()
  };

  return (
    <div>
      <TableHeader title="신고 대상 회원" />
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
            <button
              className={classes.searchBtn}
              onClick={() => {
                getTotalUserCnt();
                changePage(1);
              }}
            >
              검색
            </button>
            <p className={classes.memberNum}>
              신고 대상 회원 수 :<span> {totalUser.toLocaleString()}명</span>
            </p>
          </>
        }
      />

      <ReportAccTable 
        fetchData={fetchData} 
        isLoaded={isLoaded} 
        totalUser={totalUser} 
        currentPage={currentPage} 
        postsPerPage={postsPerPage} 
        onClickDormancy={onClickDormancy}
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

      <SaveConfirmModal
        open={saveConfirm}
        onClickCancel={() => {setSaveConfirm(false); setTargetUser();}}
        onClickConfirm={handleSubmit}
        header="휴면계정"
      >
        <main>휴면 계정 처리하시겠습니까?</main>
      </SaveConfirmModal>

      <UptConfirmModal open={modalOpen} close={closeModal} header="휴면 처리 완료">
        <main>휴면 계정 처리 되었습니다.</main>
      </UptConfirmModal>
    </div>
  );
};
export default SubjectToReport;
