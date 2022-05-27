import { User } from '../models/Users'
import jwt from 'jsonwebtoken'

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const existingUser = User.findOne({ where: { email: decoded.email } })
      if (existingUser) {
        req.user = decoded
        req.token = token
        next()
      }
      res.status(401).json({ error: 'Unauthorized' })
    }
    res.status(401).json({ error: 'Unauthorized' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}