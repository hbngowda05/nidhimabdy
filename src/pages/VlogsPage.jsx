import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import { Video, Calendar } from 'lucide-react'

const VlogsPage = () => {
  useEffect(() => {
    anime({
      targets: '.vlog-card',
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutQuad'
    })
  }, [])

  const vlogs = [
    { title: 'Vlog 1', date: 'Feb 6, 2025', src: 'vlogs/vlog1_feb_6_2025.mp4' },
    { title: 'Vlog 2', date: 'Feb 8, 2025', src: 'vlogs/vlog2_feb_8_2025.mp4' },
    { title: 'Vlog 3', date: 'Feb 18, 2025', src: 'vlogs/vlog3_feb_18_2025.mp4' },
    { title: 'Vlog 4', date: 'Feb 25, 2025', src: 'vlogs/vlog4_feb_25_2025.mp4' },
    { title: 'Vlog 5', date: 'March 9, 2025', src: 'vlogs/vlog5_march_9_2025.mp4' },
    { title: 'Vlog 5 Part 2', date: 'March 9, 2025', src: 'vlogs/vlog5_march_9_2025(part_2).mp4' },
    { title: 'Vlog 6', date: 'March 20, 2025', src: 'vlogs/vlog6_march_20_2025.mp4' },
    { title: 'Vlog 7', date: 'March 27, 2025', src: 'vlogs/vlog7_march_27_2025.mp4' },
    { title: 'Vlog 8', date: 'March 29, 2025', src: 'vlogs/vlog8_march_29_2025.mp4' },
    { title: 'Vlog 9', date: 'April 27, 2025', src: 'vlogs/vlog9_april_27_2025.mp4' },
    { title: 'Vlog 10 Part 1', date: 'June 21, 2025', src: 'vlogs/vlog10_june_21_2025(part1).mp4' },
    { title: 'Vlog 10 Part 2', date: 'June 21, 2025', src: 'vlogs/vlog10_june_21_2025(part2).mp4' },
    { title: 'Vlog 11', date: 'June 23, 2025', src: 'vlogs/vlog11_june_23_2025.mp4' },
    { title: 'Vlog 12', date: 'July 10, 2025', src: 'vlogs/vlog12_july_10_2025.mp4' },
    { title: 'Vlog 13', date: 'August 28, 2025', src: 'vlogs/vlog13_august_28_2025.mp4' },
    { title: 'Vlog 14', date: 'November 1, 2025', src: 'vlogs/vlog14_november_1_2025.mp4' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 flex items-center justify-center gap-2 md:gap-4">
          <Video size={40} className="md:w-[60px] md:h-[60px]" />
          Nidhi Vlogs 🎬
        </h1>
        <p className="text-lg md:text-2xl text-white/90">Our Amazing Memories Together!</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {vlogs.map((vlog, idx) => (
          <motion.div
            key={idx}
            className="vlog-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <Calendar size={24} className="text-yellow-400 md:w-8 md:h-8" />
              <div>
                <h3 className="text-white text-lg md:text-2xl font-bold">{vlog.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{vlog.date}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg mt-4">
              <video 
                controls 
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={vlog.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default VlogsPage