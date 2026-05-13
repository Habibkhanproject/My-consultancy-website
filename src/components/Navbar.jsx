import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Programs", path: "/programs" },
    { text: "Countries", path: "/countries" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "#f5f7fb",
        padding: "0",
        margin: "0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "0px",
          padding: "7px 25px",
          border: "1px solid #e0e0e0",
          margin: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "65px",
          }}
        >
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#0a0a0a",
              ml: 1,
            }}
          >
            Google Scholar Hub
          </Typography>

          {/* DESKTOP MENU */}
          {!isTablet && (
            <>
              {/* Middle Links */}
              <Box sx={{ display: "flex", gap: 2, color: "black" }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{
                      textTransform: "none",
                      fontSize: "15px",
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Right Buttons */}
              <Box sx={{ display: "flex", gap: 2, mr: 1 }}>
                <Button
                  variant="text"
                  component={Link}
                  to="/dashboard"
                  sx={{
                    border: "none",
                    textTransform: "none",
                    padding: "8px 18px",
                    fontSize: "15px",
                    color: "black",
                  }}
                >
                  Dashboard
                </Button>

                <Button
                  variant="contained"
                  component={Link}
                  to="/apply"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    padding: "8px 18px",
                    fontSize: "15px",
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </>
          )}

          {/* MOBILE / TABLET ICON MENU */}
          {isTablet && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Box>

      {/* DRAWER MENU */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          {/* Close button */}
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            <ListItem
              button
              component={Link}
              to="/dashboard"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
              button
              component={Link}
              to="/apply"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Apply Now" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;