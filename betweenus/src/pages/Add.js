import * as React from "react";
import { Toolbar, Button, TextField, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export default function Add() {
  return (
    <Container>
      <Grid item xs={12}>
        <Toolbar>
          <Link to="/home">
            <ArrowBackIosNewRoundedIcon />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            모집하기
          </Typography>
        </Toolbar>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="제목"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="주문시간 설정"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="가게 이름"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="픽업 장소"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth>
            주소 찾기
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="상세 픽업 장소"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="추가 정보"
            multiline
            rows={4}
            defaultValue="전달하고 싶은 추가정보를 입력해주세요 :)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            모집하기
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
