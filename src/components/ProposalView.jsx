import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ProposalView.css'
import ParallaxSection from './ParallaxSection'

const ProposalView = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <motion.div
      ref={containerRef}
      className="proposal-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Proposal Section */}
      <motion.section 
        className="proposal-hero"
        style={{ opacity, scale }}
      >
        <motion.div
          className="proposal-content"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="hearts-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          >
            <span className="heart">💕</span>
            <span className="heart">💖</span>
            <span className="heart">💝</span>
          </motion.div>

          <motion.p
            className="proposal-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Sofia ko
          </motion.p>
          <motion.h1
            className="proposal-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Will You Be My Valentine?
          </motion.h1>


          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <p>Scroll to see our few memorable moments ever since i got my iPhone </p>
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Parallax Photo Sections */}
      <ParallaxSection
        title="Our little family"
        description="I love you more each day"
        imageUrl="/images/photo1.jpg"
        direction="left"
      />

      <ParallaxSection
        title="Our first pop-up"
        description="You make everything better"
        imageUrl="/images/photo2.jpg"
        direction="right"
      />

      <ParallaxSection
        title="Birthday-te"
        description="You brighten every single day"
        imageUrl="/images/photo3.jpg"
        direction="left"
      />

      <ParallaxSection
        title="Our first anniversary"
        description="This is just the beginning of our story"
        imageUrl="/images/photo4.jpg"
        direction="right"
      />

      {/* Final Question Section */}
      <motion.section 
        className="final-question"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="question-content"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <h2>So... what do you say?</h2>
          <div className="button-group">
            <motion.button
              className="answer-button yes"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('YES! 💕 I love you so much! 🎉')}
            >
              Yes! 💕
            </motion.button>
            <motion.button
              className="answer-button definitely"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Absolutely! 💖 You make me so happy! 🎊')}
            >
              Absolutely! 💖
            </motion.button>
          </div>
          <p className="note">bawal mag no</p>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default ProposalView
