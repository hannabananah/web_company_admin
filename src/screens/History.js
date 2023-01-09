import HistoryTable from "~/components/table/HistoryTable";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Pagination from "react-js-pagination";
import "~/styles/pagination.css";
import {useStyles , datepickerSX }from "~/styles/History";

const History = () => {
  const classes = useStyles();
  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  // 데이트픽커
  let now = dayjs().format("YYYY-MM-DD");
  const [start, setStart] = useState(dayjs(now));
  const [end, setEnd] = useState(start);

  useEffect(() => {
    setEnd(start);
  }, [start]);

  //더미데이터

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  return (
    <div className={classes.root}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>관리 이력</h2>
      </section>
      
      <section className={classes.filterSection}>
        <select>
          <option>아이디</option>
          <option>내용</option>
        </select>

        <input className={classes.input} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker 
            className={classes.datePickerRoot}
            // label="start"
            value={start}
            minDate={dayjs("2017-01-01")}
            // disableMaskedInput={false}
            onChange={(newValue) => {
              // console.log(newValue)
              setStart(newValue);
            }}
            
            renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
            // renderInput={({ inputRef, inputProps, InputProps }) => (
            // console.log( inputRef, inputProps, InputProps)
            //   <div>
            //     <input ref={inputRef} {...inputProps} onClick={onClickDate} />
            //     {InputProps?.endAdornment}
            //   </div>
            // )}
            inputFormat="YYYY-MM-DD"
          />
          ~
          <DesktopDatePicker
            className={classes.datePickerRoot}
            // label="end"
            value={end}
            minDate={dayjs("2017-01-01")}
            onChange={(newValue) => {
              setEnd(newValue);
            }}
            renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
            inputFormat="YYYY-MM-DD"
          />

          {/* <DatePicker
            label="Custom input"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          /> */}
        </LocalizationProvider>

        <button className={classes.searchBtn}>검색</button>
      </section>

      <HistoryTable fetchData={fetchData} isLoaded={isLoaded} />

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
export default History;
