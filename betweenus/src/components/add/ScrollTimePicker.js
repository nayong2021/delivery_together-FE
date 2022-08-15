import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import useStoreTime from "../../store/storeTime";

export default function ScrollTimePicker() {
  const { hour, minute, setHours, setMinutes } = useStoreTime();
  const [value, setValue] = React.useState(new Date());

  const CustomTime = styled(StaticTimePicker)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

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
        <CustomTime
          theme={theme}
          toolbarTitle={"주문시간 설정"}
          displayStaticWrapperAs="mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setHours(newValue.getHours());
            setMinutes(newValue.getMinutes());
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
