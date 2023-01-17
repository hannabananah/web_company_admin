import {useEffect, useState} from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Add";
import MemberTable from "~/components/table/MemberTable";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import axios from "axios";

// filter select option
const option = [
    {
        value: "Phone",
        name: "전화번호",
    },
    {
        value: "Email",
        name: "이메일",
    },
];

const MemberStatus = () => {
    const classes = useStyles();

    // 페이지네이션
    const [totalUser, setTotalUser] = useState(0); //임시
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        changePage(page);
        console.log("page  -------------------->", page);
    };

    const [fetchData, setFetchData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // 필터
    const [selectVal, setSelectVal] = useState("Phone");
    const [inputVal, setInputVal] = useState("");


    const handleNameChange = (e: any) => {
        setInputVal(e.target.value);
    };

    const getTotalUserCnt = () => {
        axios
            .get(`http://localhost:3001/api/user/totalUserCnt?s=${selectVal}&v=${inputVal}`, {
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
            .get(`http://localhost:3001/api/user/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`, {
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
        getTotalUserCnt();
        changePage(1);

        // fetch("https://dummyjson.com/users/")
        //   .then((res) => res.json())
        //   .then((json) => setFetchData(json))
        //   .then(setIsLoaded(true));
    }, []);

    const onChangeSelect = (event) => {
        console.log(event.target.value);
        setSelectVal(event.target.value);
    };

    // 총 회원 수
    // const 총 = +fetchData.limit;
    // 천 단위 마다 콤마
    // cmemberNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className={classes.root}>
            <section className={classes.titleSection}>
                <h2 className={classes.mainTitle}>회원현황</h2>
            </section>

            <FilterSection
                left={
                    <>
                        <SelectBox
                            value={selectVal}
                            onChange={onChangeSelect}
                            option={option}
                        />
                        <input className={classes.filterInput}  onChange={handleNameChange} />
                        <button className={classes.searchBtn} onClick={()=> {
                            changePage(1);
                        }}>검색</button>
                    </>
                }
                right={
                    <p className={classes.memberNum}>
                        총 회원 수 :<span> {totalUser.toLocaleString()}명</span>
                    </p>
                }
            />

            <MemberTable fetchData={fetchData} isLoaded={isLoaded}/>
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
}

export default MemberStatus;
