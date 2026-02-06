import { motion } from 'framer-motion'
import './NormalView.css'

const NormalView = () => {
  const products = [
    { id: 1, name: 'Elite Series', price: '$299', image: '⌚' },
    { id: 2, name: 'Pro Carry', price: '$449', image: '👜' },
    { id: 3, name: 'Air Motion', price: '$189', image: '👟' },
    { id: 4, name: 'Infinity Wrap', price: '$129', image: '🧣' },
    { id: 5, name: 'Vision Tech', price: '$249', image: '🕶️' },
    { id: 6, name: 'Vault Carbon', price: '$159', image: '👛' },
  ]

  return (
    <motion.div
      className="normal-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Designed for Excellence
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="subtitle"
        >
          The future of premium lifestyle
        </motion.p>
      </div>
      
      <div className="products-section">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
          >
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default NormalView
