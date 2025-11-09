import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import { Heart, Sparkles } from 'lucide-react'

const LandingPage = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      anime({
        targets: titleRef.current.children,
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
        duration: 1500
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 text-pink-300"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Heart size={60} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-yellow-300"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Sparkles size={60} />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 md:p-20 shadow-2xl max-w-5xl w-full border border-white/20"
      >
        <div ref={titleRef} className="text-center">
          <img src="/images/sName="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-8">
            Happy 🎉 Birthday
          </h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Captain!!!!
          </motion.h2>
        </div>
      </motion.div>
    </div>
  )
}

export default LandingPage