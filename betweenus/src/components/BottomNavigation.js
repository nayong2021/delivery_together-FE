import * as React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="홈"
        value="home"
        icon={<HomeRoundedIcon />}
        component={Link}
        to={"/home"}
      />
      <BottomNavigationAction
        label="지도"
        value="map"
        icon={<LocationOnOutlinedIcon />}
        component={Link}
        to={"/map"}
      />
      <BottomNavigationAction
        label="추가"
        value="add"
        icon={<AddCircleRoundedIcon />}
        component={Link}
        to={"/add"}
      />

      <BottomNavigationAction
        label="주문"
        value="order"
        icon={<ListRoundedIcon />}
        component={Link}
        to={"/order"}
      />

      <BottomNavigationAction
        label="설정"
        value="setting"
        icon={<AccountCircleRoundedIcon />}
        component={Link}
        to={"/setting"}
      />
    </BottomNavigation>
  );
}
