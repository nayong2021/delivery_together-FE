import * as React from "react";
import { Typography, Box, Grid } from "@mui/material";
import NoRoomIcon from "../assets/NoRoomIcon.png";

export default function NoRoomNotice() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Grid container justifyContent="center" alignItems="center">
        <img
          className="NoRoomIcon"
          alt="NoRoomIcon"
          src={NoRoomIcon}
          width="50%"
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          아직 공동구매 모집방이 없어요. 호스트가 되어 배달 공동구매방을
          만들어주세요 :)
        </Typography>
      </Grid>
    </Box>
  );
}
