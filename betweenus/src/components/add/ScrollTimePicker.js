import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import useStoreTime from "../../store/storeTime";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

export default function ScrollTimePicker() {
  const { setHours, setMinutes } = useStoreTime();
  const [value, setValue] = React.useState(new Date());

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          theme={theme}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setHours(String(newValue.getHours()));
            setMinutes(String(newValue.getMinutes()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
