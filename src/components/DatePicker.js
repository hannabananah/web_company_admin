import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useStyles, datepickerSX } from "~/styles/DatePicker";

const DatePicker = (props) => {
  const { start, setStart, end, setEnd } = props;
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        className={classes.root}
        // label="start"
        value={start}
        // minDate={dayjs(new Date())}
        minDate={new Date("2020-01-01")}
        // disableMaskedInput={false}
        onChange={(newValue) => {
          // console.log(newValue)
          setStart(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={datepickerSX} 
        // inputProps={
        //   { 
        //     ...params.inputProps, 
        //     placeholder: "dddd" 
        //   }
        // }
        />}
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
        className={classes.root}
        // label="end"
        value={end}
        minDate={start}
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
  );
};
export default DatePicker;
