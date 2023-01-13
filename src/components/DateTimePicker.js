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
  const classes = useStyles();
  const { start, setStart, end, setEnd } = props;
  const [locale, setLocale] = useState("ko");
  const [value, setValue] = useState(dayjs(new Date()));
  const [ampm, setAmpm] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DateTimePicker
        className={classes.root}
        value={value}
        minDate={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
        ampm={ampm}
      />
      &nbsp;&sim;&nbsp;
      <DateTimePicker
        className={classes.root}
        value={value}
        minDate={start}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} sx={datepickerSX} />}
        ampm={ampm}
      />
    </LocalizationProvider>
  );
};
export default DateWithTimePicker;
