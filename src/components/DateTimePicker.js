import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useStyles, datepickerSX } from "~/styles/DatePicker";

const locales = ["en", "ko"];

const DateWithTimePicker = (props) => {
  const { start, setStart, end, setEnd, value, setValue, ampm } = props;
  const classes = useStyles();
  const [locale, setLocale] = useState("ko");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DateTimePicker
        className={classes.root}
        value={start}
        minDate={dayjs(new Date())}
        onChange={(newValue) => setStart(newValue)}
        renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
        ampm={ampm}
      />
      &nbsp;&sim;&nbsp;
      <DateTimePicker
        className={classes.root}
        value={end}
        minDate={start}
        onChange={(newValue) => setEnd(newValue)}
        renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
        ampm={ampm}
      />
    </LocalizationProvider>
  );
};
export default DateWithTimePicker;
