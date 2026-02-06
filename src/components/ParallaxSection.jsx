import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ParallaxSection.css'

const ParallaxSection = ({ title, description, imageUrl, direction = 'left' }) => {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section 
      ref={sectionRef} 
      className={`parallax-section ${direction}`}
    >
      <motion.div
        className="parallax-content"
        style={{ opacity }}
      >
        <motion.div
          className="text-content"
          initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>

        <motion.div
          className="image-content"
          style={{ y, scale }}
        >
          <div className="image-wrapper">
            <motion.div
              className="image-placeholder"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={imageUrl} 
                alt={title}
                onError={(e) => {
                  // Fallback to a gradient if image not found
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  e.target.parentElement.innerHTML = 
                    '<div class="placeholder-text">📸<br/>Add your photo here<br/>' + imageUrl + '</div>'
                }}
              />
            </motion.div>
            
            {/* Decorative hearts */}
            <motion.div
              className="floating-heart heart-1"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            >
              💕
            </motion.div>
            <motion.div
              className="floating-heart heart-2"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              💖
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ParallaxSection
