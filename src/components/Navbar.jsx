import { useState, useEffect } from "react";
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

import { Link, useNavigate } from "react-router-dom";

// 🔥 FIREBASE
import { signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

// 🔥 AUTH CONTEXT
import { auth, db } from "../config/firebase";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const [logoText, setLogoText] = useState("Google Scholar Hub");

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Programs", path: "/programs" },
    { text: "Countries", path: "/countries" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  // 🔥 REAL-TIME FIRESTORE LISTENER — reads from homepage/navbar → data.logoText
  useEffect(() => {
    const docRef = doc(db, "homepage", "navbar");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();

        setLogoText(data?.data?.logoText || "Google Scholar Hub");
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  // 🔥 LOGOUT
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={4}
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
          {/* LOGO (LIVE UPDATE) */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#0a0a0a",
              ml: 1,
            }}
          >
            {logoText}
          </Typography>

          {/* DESKTOP MENU */}
          {!isTablet && (
            <>
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{
                      textTransform: "none",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2, mr: 1 }}>
                {user ? (
                  <>
                    <Button
                      component={Link}
                      to="/dashboard"
                      sx={{ textTransform: "none", color: "black" }}
                    >
                      Dashboard
                    </Button>

                    <Button variant="contained" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button component={Link} to="/login" sx={{ color: "black" }}>
                      Login
                    </Button>

                    <Button
                      variant="contained"
                      component={Link}
                      to="/signup"
                    >
                      Signup
                    </Button>
                  </>
                )}

                <Button variant="contained" component={Link} to="/apply">
                  Apply Now
                </Button>
              </Box>
            </>
          )}

          {/* MOBILE MENU */}
          {isTablet && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
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

            {user ? (
              <>
                <ListItem button component={Link} to="/dashboard">
                  <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>

                <ListItem button component={Link} to="/signup">
                  <ListItemText primary="Signup" />
                </ListItem>
              </>
            )}

            <ListItem button component={Link} to="/apply">
              <ListItemText primary="Apply Now" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
