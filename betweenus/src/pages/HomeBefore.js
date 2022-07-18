import * as React from "react";
import { Container } from "@mui/system";
import { Toolbar, Typography, Grid } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NoRoomNotice from "../components/home/NoRoomNotice";
import BottomNavigation from "../components/common/BottomNavigation";

export default function HomeBefore() {
  return (
    <Container>
      <Grid item xs={12}>
        <Toolbar>
          <Grid container>
            <Typography variant="h6" component="div">
              최신순
            </Typography>
            <ExpandMoreRoundedIcon />
          </Grid>
          <SearchRoundedIcon align="right" />
        </Toolbar>
      </Grid>
      <NoRoomNotice />
      <Grid item xs={12}>
        <BottomNavigation />
      </Grid>
    </Container>
  );
}
