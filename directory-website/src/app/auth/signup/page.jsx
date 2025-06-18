"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  TextField,
  Box,
  Typography,
  Divider,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import AuthLayout from "../../../components/auth/AuthLayout";
import LoadingButton from "../../../components/auth/LoadingButton";
import GoogleSignInButton from "../../../components/auth/GoogleSignInButton";
import { useAuth } from "../../../contexts/AuthContext";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const auth = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    const { user, error: authError } = await auth.signUpWithEmail(
      formData.email,
      formData.password,
      formData.fullName
    );

    if (authError) {
      setError(authError);
    }
    // No need to manually redirect - AuthContext handles it automatically

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");

    const { user, error: authError } = await auth.signInWithGoogle();

    if (authError) {
      setError(authError);
    }
    // No need to manually redirect - AuthContext handles it automatically

    setGoogleLoading(false);
  };

  // Custom styling for white text fields
  const textFieldSx = {
    mb: 2,
    "& .MuiInputLabel-root": {
      color: "#f7fafc", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#f7fafc", // Focused label color
    },
    "& .MuiOutlinedInput-root": {
      color: "#f7fafc", // Input text color
      "& fieldset": {
        borderColor: "#f7fafc", // Border color
      },
      "&:hover fieldset": {
        borderColor: "#f7fafc", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f7fafc", // Focused border color
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#f7fafc", // Placeholder color
      opacity: 0.7,
    },
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Subarashi Scout to start connecting with buyers and sellers"
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          sx={textFieldSx}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person sx={{ color: "#f7fafc" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={textFieldSx}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: "#f7fafc" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          required
          sx={textFieldSx}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#f7fafc" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "#f7fafc" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          sx={{ ...textFieldSx, mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#f7fafc" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  sx={{ color: "#f7fafc" }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          loading={loading}
          sx={{
            py: 1.5,
            mb: 2,
            background: "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
            color: "#19212b",
            fontWeight: 700,
            "&:hover": {
              background: "linear-gradient(90deg, #4f8cff 0%, #ffb86b 100%)",
              opacity: 0.9,
            },
          }}
        >
          Create Account
        </LoadingButton>

        <Divider
          sx={{
            my: 2,

            "&::before, &::after": {
              borderColor: "#f7fafc",
            },
          }}
        >
          <Typography variant="body2" sx={{ color: "#f7fafc" }}>
            or
          </Typography>
        </Divider>

        <GoogleSignInButton
          onClick={handleGoogleSignIn}
          loading={googleLoading}
        >
          Sign up with Google
        </GoogleSignInButton>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2" sx={{ color: "#f7fafc" }}>
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              style={{
                color: "#4f8cff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}
