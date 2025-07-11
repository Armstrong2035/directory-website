"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth"
import { auth, db } from "../firebase/client"
import { useRouter } from "next/navigation"
import { doc, setDoc } from "firebase/firestore"

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user)
      setLoading(false)
      
      // Redirect to dashboard if user is authenticated and on auth pages
      if (user && (window.location.pathname === '/signin' || window.location.pathname === '/signup')) {
        router.push('/dashboard')
      }
    }) 
    return () => unsubscribe()
  }, [router])

  const signInWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { user: result.user, error: null }
    } catch (error) {
      return { user: null, error: error.message }
    }
  }

  const signUpWithEmail = async (email, password, displayName) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      const user = result.user

      // Update display name if provided
      if (displayName && result.user) {
        await updateProfile(user, {
          displayName: displayName,
        })
      }

          // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      role: "landlord",
      createdAt: new Date().toISOString(),
    })


      return { user: result.user, error: null }
    } catch (error) {
      return { user: null, error: error.message }
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

          // Create or update user document in Firestore
    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: "landlord",
        createdAt: new Date().toISOString(),
      },
      { merge: true },
    )

      return { user: user, error: null }
    } catch (error) {
      return { user: null, error: error.message }
    }
  }

  const logout = async () => {
    await auth.signOut()
    router.push('/signin')
  }

  const value = {
    user,
    loading,
    logout,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
