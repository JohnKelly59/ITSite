import * as React from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactsIcon from "@mui/icons-material/Contacts";
import CollectionsIcon from "@mui/icons-material/Collections";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Avatar from "@mui/material/Avatar";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HomeIcon from "@mui/icons-material/Home";
import Footer from "../components/Footer";
import logo from "../public/images/ideal_therapy_logo.jpg"

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const router = useRouter();
  const sidebarInfo = [
    { title: "Home", icon: <HomeIcon />, link: "/" },
    {
      title: "About Us",
      icon: <PeopleIcon />,
      link: "/aboutus",
    },
    {
      title: "Services",
      icon: <DesignServicesIcon />,
      link: "/services",
    },
    {
      title: "Contact Us",
      icon: <ConnectWithoutContactIcon />,
      link: "/contactus",
    },
  ];
  const [state, setState] = React.useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if ((anchor = true)) {
      anchor = "left";
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerItemSelect = (route) => {
    toggleDrawer("left", false);
    router.push(route);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {sidebarInfo.map((info, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => drawerItemSelect(info.link)}>
              <ListItemIcon>{info.icon}</ListItemIcon>
              <ListItemText primary={info.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: "#1bb2b0" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Ideal Therapy
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="make an appointment"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  aria-controls="menu-appbar"
                  sx={{ width: 64, height: 64, mr: 0 }}
                  alt="Ideal Therapy"
                  src={logo.src}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose, router.push("/");
                  }}
                >
                  Go Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose, router.push("/contactus");
                  }}
                >
                  Schedule an Appointment
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", true)}
      >
        <DrawerHeader>
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Ideal Therapy"
            src={logo.src}
          /><p>&nbsp;</p>
          <Typography variant="h6" noWrap component="div">
            Ideal Therapy
          </Typography>
          <IconButton onClick={toggleDrawer("left", false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        {list(state.left)}
      </Drawer>
    </>
  );
}
