import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Cake, Heart, Video, Lock } from 'lucide-react'

const Navigation = ({ onVlogsAuth, showVlogs }) => {
  const [vlogPassword, setVlogPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const location = useLocation()

  const handleVlogClick = () => {
    if (!showVlogs) {
      setShowPasswordInput(true)
    }
  }

  const handleVlogSubmit = (e) => {
    e.preventDefault()
    if (onVlogsAuth(vlogPassword)) {
      setShowPasswordInput(false)
      setVlogPassword('')
    } else {
      alert('Incorrect password!')
    }
  }

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/birthday', icon: Cake, label: 'Birthday' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white text-base md:text-2xl font-bold"
          >
            🎉 <span className="hidden sm:inline">Captain Nidhi</span><span className="sm:hidden">CN</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </motion.button>
              </Link>
            ))}

            {showVlogs ? (
              <Link to="/vlogs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/vlogs'
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <Video size={20} />
                  Vlogs
                </motion.button>
              </Link>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVlogClick}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition-all"
              >
                <Lock size={20} />
                Vlogs
              </motion.button>
            )}
          </div>
        </div>

        {showPasswordInput && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-4"
          >
            <form onSubmit={handleVlogSubmit} className="flex gap-2">
              <input
                type="password"
                value={vlogPassword}
                onChange={(e) => setVlogPassword(e.target.value)}
                placeholder="Enter vlogs password..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation