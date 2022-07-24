import * as React from "react";
import { Toolbar, Button, TextField, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useForm, Controller } from "react-hook-form";

const AddBefore = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="제목"
                  variant="standard"
                  id="standard-basic"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "모집 제목을 입력해주세요" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="time"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="주문시간 설정"
                  variant="standard"
                  id="standard-basic"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "주문시간을 설정해주세요" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="diner"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="가게 이름"
                  variant="standard"
                  id="standard-basic"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "가게 이름을 입력해주세요" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="location"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="픽업장소"
                  variant="standard"
                  id="standard-basic"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "픽업장소를 입력해주세요" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth>
              주소 찾기
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="detailed"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="상세 픽업장소"
                  variant="standard"
                  id="standard-basic"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "상세 픽업장소를 입력해주세요" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="info"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  defaultValue="전달하고 싶은 추가 정보를 입력해주세요 :)"
                  label="추가 정보"
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  fullWidth
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "추가 정보를 입력해주세요" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              모집하기
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddBefore;
