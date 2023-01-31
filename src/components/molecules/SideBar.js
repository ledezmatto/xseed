import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const changeToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  const menuListItems = [
    { text: "Characters", link: () => navigate("/"), pathname: "/" },
    {
      text: "Favorites",
      link: () => navigate("/favorites"),
      pathname: "/favorites",
    },
  ];

  const getHeaderTitle = menuListItems.find(
    (item) => item.pathname === pathname
  )?.text;

  const navigateMenu = (item) => {
    item.link();
    changeToggleSideBar();
  };

  return (
    <Box sx={{ display: "flex" }} className="blackBackground">
      <Toolbar style={{ width: "100%" }}>
        <IconButton
          color="inherit"
          onClick={changeToggleSideBar}
          edge="start"
          sx={{ mr: 2, ...(toggleSideBar && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <p className="justify-center">{getHeaderTitle}</p>
      </Toolbar>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            backgroundColor: "#17141f",
          },
        }}
        anchor="left"
        open={toggleSideBar}
      >
        <div className="justify-start margin-top-12 margin-bottom-30">
          <IconButton onClick={changeToggleSideBar}>
            {<ClearIcon style={{ color: "white" }} />}
          </IconButton>
        </div>

        {menuListItems.map((item) => (
          <p
            className="bold font-22 margin-top-12 margin-left-24"
            style={{ color: "white" }}
            key={item.text}
            onClick={() => navigateMenu(item)}
          >
            {item.text}
          </p>
        ))}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
