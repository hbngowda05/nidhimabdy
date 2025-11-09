import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import { Phone, Heart, Anchor } from 'lucide-react'

const PersonalWishPage = () => {
  const textRef = useRef(null)

  useEffect(() => {
    // Advanced anime.js animations
    anime({
      targets: '.wish-title',
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [180, 0],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)'
    })

    anime({
      targets: '.wish-box',
      translateX: [-300, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      duration: 1500,
      easing: 'easeOutExpo'
    })
  }, [])

  const images1 = [
    '/images/20241109_154622.jpg',
    '/images/20241109_151304.jpg',
    '/images/IMG-20241109-WA0191.jpg',
    '/images/20241109_151330.jpg',
  ]

  const images2 = [
    '/images/IMG-20241103-WA0027.jpg',
    '/images/IMG-20241104-WA0020.jpg',
    '/images/IMG-20250112-WA0053new.jpg',
    '/images/IMG-20240828-WA0006.jpg',
  ]

  const images3 = [
    '/images/nccn.jpg',
    '/images/IMG-20250112-WA0052.jpg',
    '/images/IMG-20240828-WA0007.jpg',
    '/images/wnd.jpg',
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      {/* Title */}
      <motion.div className="wish-title text-center mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
          Happiest Birthday 🎊
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Pukhli Kuli Maharani! 👑
        </h2>
      </motion.div>

      {/* Main Message Box */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-16">
        <motion.div
          className="wish-box bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-white text-base md:text-xl leading-relaxed">
            Hey, Happiest Birthday Maharani avare!!!! Ik this website is kinda lame. ahhh i am not thinking just typing whatever is coming to my mind 🤦🏻‍♂️
            I have known u for almost one year now and i could only wish i had met you sooner. I am happy, i am myself, ageeb everything around u.
            yappaaaaaa, im making you read these big texts now, parvaghilla enjoy.😂 okay enough about me, nin baghe mathadana.
          </p>
        </motion.div>
      </div>

      {/* Second Message */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-16">
        <motion.div
          className="wish-box bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-white text-base md:text-xl leading-relaxed">
            Adhu yen andre You are awesomeee, talented, just Perfect Maharani. True, i admire you for all these things but best part is the way v vibe, laugh and i feel like i can share anything with you.
            How can i forget your smile, you look soooooooooooooooo beautiful when u smile. ammaaaaaaa ah saree nal noddag anthu full bidogthini 😂.
            i have a lot to say, direct aghe helthini. for now im thanking you for coming into my life and you know my 11 11 wish😁.
            just stay happy, healthy and let all the 11 11 wishes v made to come true💚, thats all i ask for.
          </p>
        </motion.div>
      </div>

      {/* Image Galleries */}
      <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
        {/* Gallery 1 - Left to Right */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
          >
            {[...images1, ...images1, ...images1].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <img src={img} alt={`Memory ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gallery 2 - Right to Left */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
          >
            {[...images2, ...images2, ...images2].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <img src={img} alt={`Memory ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gallery 3 - Left to Right */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
          >
            {[...images3, ...images3, ...images3].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <img src={img} alt={`Memory ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20"
        >
          <div className="text-center mb-6 md:mb-8">
            <Anchor size={40} className="inline-block text-yellow-300 mb-3 md:w-[60px] md:h-[60px]" />
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Aye Aye CAPTAIN!!!!</h2>
          </div>

          <div className="space-y-3 md:space-y-4 text-white text-base md:text-lg">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4 md:mb-6">Contacts for:</h3>
            <div className="space-y-3">
              {[
                'When you are Happy',
                'When you are Sad',
                'When you need help',
                'When you want to talk about anything',
                'When you want to go for Sports/trekking/try out places to eat/Movies etc etc'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 bg-white/10 p-3 md:p-4 rounded-xl"
                >
                  <Phone size={20} className="text-green-400 md:w-6 md:h-6" />
                  <span className="font-semibold text-sm md:text-base">{item}:</span>
                  <span className="text-cyan-300 text-sm md:text-base">"+91 8722796999" [Harshith B N]</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center mt-6 md:mt-8"
          >
            <h3 className="text-xl md:text-3xl font-bold text-yellow-300">24/7 Commander always on duty!</h3>
            <p className="text-xl md:text-2xl text-white mt-3 md:mt-4"><b>#peace</b>✌️️</p>
            <p className="text-white/80 mt-3 md:mt-4 text-xs md:text-sm">
              if i said / going say / do smgt knowingly or unknowingly. yenu ankobedha.(S word), 
              svalpa cring irbahudu ee website baibedha
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default PersonalWishPage