import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import BirthdayPage from './pages/BirthdayPage'
import PersonalWishPage from './pages/PersonalWishPage'
import VlogsPage from './pages/VlogsPage'
import Navigation from './components/Navigation'
import ParticlesBackground from './components/ParticlesBackground'

const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return hash.toString(36)
}

// derive hashes from obfuscated char codes (avoids plain strings in bundle)
const _m=[109,97,104,97,114,97,110,105] // "maharani"
const PERSONAL_WISH_HASH = simpleHash(String.fromCharCode(..._m))

const _v=[104,101,121,99,97,109,118,108,111,103,115] // "heycamvlogs"
const VLOGS_HASH = simpleHash(String.fromCharCode(..._v))

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const auth = sessionStorage.getItem('pw_auth') === 'true'
    setIsAuth(auth)
    setChecking(false)
  }, [])

  if (checking) return null
  return isAuth ? children : <Navigate to="/birthday" />
}

function App() {
  const [showVlogs, setShowVlogs] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('vlogs_auth') === 'true') {
      setShowVlogs(true)
    }
  }, [])

  const handleVlogsAuth = (password) => {
    const ok = simpleHash(password) === VLOGS_HASH
    if (ok) {
      sessionStorage.setItem('vlogs_auth', 'true')
      setShowVlogs(true)
      return true
    }
    return false
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500">
        <ParticlesBackground />
        <Navigation onVlogsAuth={handleVlogsAuth} showVlogs={showVlogs} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/birthday" element={<BirthdayPage />} />
            <Route 
              path="/personal-wish" 
              element={
                <ProtectedRoute>
                  <PersonalWishPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/vlogs" 
              element={
                showVlogs ? <VlogsPage /> : <Navigate to="/" />
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App