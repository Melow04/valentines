import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = ({ onReveal, isRevealed }) => {
  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          LUXE
        </motion.div>
        
        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          {!isRevealed && (
            <motion.button
              className="login-btn"
              onClick={onReveal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
