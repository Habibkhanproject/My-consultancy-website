import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


export default function Login() {
  const navigate = useNavigate();

  // Controlled Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 FIREBASE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log("Logged In User:", user);
      alert("Login Successful");

      // redirect after login
      navigate("/dashboard");

    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          width: "100%",
          maxWidth: "1400px",
          minHeight: "90vh",
          bgcolor: "white",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Login"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* RIGHT FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 8 },
            py: 6,
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight="700">
              Login
            </Typography>

            <Typography color="text.secondary">
              Login to your consultancy account
            </Typography>
          </Box>

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Forgot Password */}
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "14px",
            }}
          >
            <Link
              to="/forgotpassword"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: 500,
              }}
            >
              Forgot Password?
            </Link>
          </Typography>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Login
          </Button>

          <Typography textAlign="center">
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: 600,
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}