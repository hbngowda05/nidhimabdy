import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import anime from 'animejs'

const simpleHash = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return hash.toString(36)
}

// derive hash from obfuscated char codes
const _m=[109,97,104,97,114,97,110,105] // "maharani"
const PERSONAL_WISH_HASH = simpleHash(String.fromCharCode(..._m))

const BirthdayPage = () => {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    anime({
      targets: '.wish-section',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
      easing: 'easeOutExpo',
      duration: 1000
    })
  }, [])

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    const ok = simpleHash(password) === PERSONAL_WISH_HASH
    if (ok) {
      sessionStorage.setItem('pw_auth', 'true')
      navigate('/personal-wish')
    } else {
      alert('Incorrect password. Please try again.')
    }
  }

  const images = [
    'images/IMG-20250213-WA0151.jpg',
    'images/IMG-20250213-WA0176.jpg',
    'images/IMG-20250213-WA0177.jpg',
    'images/IMG-20250213-WA0192.jpg',
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500">
      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8 md:mb-12 px-2"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Happyyyyy Birthdayyyyy Nidhiiii!!!!!!
        </h1>
      </motion.div>

      {/* Scrolling Images */}
      <div className="mb-12 md:mb-16 overflow-hidden rounded-xl">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 md:gap-4"
        >
          {[...images, ...images, ...images, ...images].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 sm:w-48 md:w-52 h-auto rounded-xl overflow-hidden shadow-xl">
              <img src={img} alt={`Memory ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wish 1 - Sister */}
      <div className="wish-section max-w-4xl mx-auto mb-8 md:mb-12 px-4">
        <motion.div 
          className="w-full max-w-xs h-44 sm:h-52 mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
          style={{ backgroundImage: 'url(images/ns2.jpg)', backgroundSize: '120%', backgroundPosition: '-60px 2px', backgroundRepeat: 'no-repeat' }}
          animate={{ backgroundPosition: ['-60px 10px', '-20px -10px', '-50px -20px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
          <p className="text-white text-base md:text-lg leading-relaxed text-left">
            Hieeeeeeeeeeeeeeeee sissyyyy.... Happieee birthday!!!!!!! Hv a grttt oneeee i love u sooooo muchhhhh even though v hv our small fights it won't matter as for our bonding cause v hv created such a grt one You are not just a sister to me but also a best friend and a source of constant joy. May your day be filled with love, laughter, and unforgettable moments! Dear sister, on your special day, I want to express how grateful I am to have you in my lifeee !!!!!!! I will nd always look forward for talking abt anything to u ...ur literally an unpaid therapist for me i really hope we both hv each other's back forever nd thers no better sister than u I bet ....I love u sooooo muchhhhhh thank u soooo muchhhhh for everything!!!! 💗😭
            Happiest birthday againnnnn 🤍🎀
          </p>
        </div>
      </div>

      {/* Wish 2 */}
      <div className="wish-section max-w-4xl mx-auto mb-8 md:mb-12 px-4">
        <motion.div 
          className="w-full max-w-xs h-44 sm:h-52 mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
          style={{ backgroundImage: 'url(images/cn.jpg)', backgroundSize: '120%', backgroundPosition: 'center -10px', backgroundRepeat: 'no-repeat' }}
          animate={{ backgroundPosition: ['center -10px', 'center -50px', '0 -50px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
          <p className="text-white text-base md:text-lg leading-relaxed text-left">
            Happy Birthday, Nidhi! May your journey ahead be as adventurous as your travels and as rewarding as your hard work on every project. Keep believing in 11:11, and may all your dreams come true. Stay strong, keep exploring, and never stop shining!
          </p>
        </div>
      </div>

      {/* Wish 3 */}
      <div className="wish-section max-w-4xl mx-auto mb-8 md:mb-12 px-4">
        <motion.div 
          className="w-full max-w-xs h-44 sm:h-52 mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
          style={{ backgroundImage: 'url(images/pn.jpg)', backgroundSize: '120%', backgroundPosition: 'center -50px', backgroundRepeat: 'no-repeat' }}
          animate={{ backgroundPosition: ['center -50px', 'center -150px', '0 -150px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
          <p className="text-white text-base md:text-lg leading-relaxed text-left">
            Happy Birthday Nidhi!! I'm so grateful for every moment we've shared. Wishing you a year full of laughter, love, and all the happiness you deserve. Here's to more amazing memories together!
          </p>
        </div>
      </div>

      {/* Wish 4 */}
      <div className="wish-section max-w-4xl mx-auto mb-8 md:mb-12 px-4">
        <motion.div 
          className="w-full max-w-xs h-44 sm:h-52 mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
          style={{ backgroundImage: 'url(images/hn.jpg)', backgroundSize: '100%', backgroundPosition: '20px -30px', backgroundRepeat: 'no-repeat' }}
          animate={{ backgroundPosition: ['20px -30px', '-20px -10px', '20px -20px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
          <p className="text-white text-base md:text-lg leading-relaxed text-left">
            Heyy nidhiii😃...wish you a very happy birthday kaneee..I honestly never thought we would be working on a project like this initially but you're enthusiasm is what drives me to join u in all such events..thanks for encouraging me to join such things and also you're annoying but yeah I forgive u cuz i anyways annoy u more than u ever can!! So have a blast and make this year ur best ever..all the very bestt!!!
          </p>
        </div>
      </div>

      {/* Additional Friend Images */}
      <div className="wish-section max-w-md mx-auto mb-8 px-4">
        <div className="w-full h-[500px] sm:h-[700px] md:h-[900px] mx-auto rounded-xl overflow-hidden shadow-2xl mb-6 md:mb-8">
          <img src="images/nf1.jpg" alt="Friend" className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] mx-auto rounded-xl overflow-hidden shadow-2xl mb-6 md:mb-8">
          <img src="images/nf2.jpg" alt="Friend" className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-[450px] sm:h-[550px] md:h-[700px] mx-auto rounded-xl overflow-hidden shadow-2xl">
          <img src="images/np3.jpg" alt="Friend" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Password Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="wish-section max-w-xl mx-auto mt-12 md:mt-16 mb-12 md:mb-16 px-4 relative min-h-[350px] md:min-h-[400px] flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
          <img src="images/WhatsApp_Image_2025-02-14_at_19.32.45_f7b1e73a-removebg-preview.png" alt="" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 w-full">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Password??</h3>
          <form onSubmit={handlePasswordSubmit} className="space-y-4 md:space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 md:py-4 text-base md:text-lg rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-lg"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Background decorative images */}
      <div className="fixed bottom-10 left-10 w-56 h-80 opacity-40 pointer-events-none hidden md:block">
        <img src="images/n-removebg-preview.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="fixed top-20 right-10 w-48 h-72 opacity-40 pointer-events-none hidden md:block">
        <img src="images/nc2-removebg-preview.png" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default BirthdayPage