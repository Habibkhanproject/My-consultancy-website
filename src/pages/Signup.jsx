import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import GoogleIcon from "@mui/icons-material/Google";

// Firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";

// ✅ ADD FIRESTORE
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 FIREBASE SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // ⭐ SAVE USER IN FIRESTORE (THIS FIXES YOUR DASHBOARD)
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        role: "user",
        uid: user.uid,
        createdAt: new Date(),
      });

      console.log("User Created:", user);
      alert("Signup Successful");

      // optional redirect after signup
      navigate("/");

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
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Signup"
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
              Sign Up
            </Typography>

            <Typography color="text.secondary">
              Create your consultancy account
            </Typography>
          </Box>

          <TextField
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Sign Up
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              color: "black",
              borderColor: "#dcdcdc",
            }}
          >
            Continue with Google
          </Button>

          <Typography textAlign="center">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: 600,
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>

        
      </Box>
    </Box>
  );
}