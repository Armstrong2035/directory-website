"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { TextField, Box, Typography, Divider, Alert, InputAdornment, IconButton } from "@mui/material"
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material"
//import { signInWithEmail, signInWithGoogle } from "../../lib/auth"
import AuthLayout from "../../../components/auth/AuthLayout"
import LoadingButton from "../../../components/auth/LoadingButton"
import GoogleSignInButton from "../../../components/auth/GoogleSignInButton"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../../firebase/client"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (error) setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

  /*   const { user, error: authError } = await signInWithEmail(formData.email, formData.password)

    if (authError) {
      setError(authError)
    } else {
      router.push("/dashboard")
    }
 */
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError("")


    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)

/*       const { user, error: authError } = await signInWithGoogle()

    if (authError) {
      setError(authError)
    } else {
      router.push("/dashboard")
    } */
 
    setGoogleLoading(false)
  }

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to manage your property listings">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
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
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
            background: "linear-gradient(135deg, #005244 0%, #22ab72  100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #22ab72 0%, #005244 100%)",
            },
          }}
        >
          Sign In
        </LoadingButton>

        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            or
          </Typography>
        </Divider>

        <GoogleSignInButton onClick={handleGoogleSignIn} loading={googleLoading}>
          Continue with Google
        </GoogleSignInButton>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {"Don't have an account? "}
            <Link
              href="/signup"
              style={{
                color: "#667eea",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  )
}
