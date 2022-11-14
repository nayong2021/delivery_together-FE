import { ReactComponent as MenuIcon } from "../../assets/img_renewal/ico_hamburger1.svg";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
// import { orange } from "@mui/material/colors";

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { setOption } = useStoreDropdownMenu();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickFirst = () => {
    setOption("최신순");
  };
  const onClickSecond = () => {
    setOption("가까운 순");
  };
  const onClickThird = () => {
    setOption("모집인원 많은 순");
  };
  return (
    <div className="my-filter">
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ p: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem value={"최신순"} onClick={onClickFirst}>
          <AccessTimeRoundedIcon sx={{ pr: 2 }} color="disabled" /> 최신순
        </MenuItem>
        <MenuItem value={"가까운 순"} onClick={onClickSecond}>
          <DirectionsWalkRoundedIcon sx={{ pr: 2 }} color="disabled" /> 가까운
          순
        </MenuItem>
        <MenuItem value={"모집인원 많은 순"} onClick={onClickThird}>
          <PeopleRoundedIcon sx={{ pr: 2 }} color="disabled" /> 모집인원 많은 순
        </MenuItem>
      </Menu>
    </div>
  );
}
