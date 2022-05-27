import { User } from '../models/Users.js'
import jwt from 'jsonwebtoken'

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const existingUser = User.findOne({ where: { email: decoded.email } })
      if (existingUser) {
        req.user = decoded
        req.token = token
      } else {
        res.status(401).json({ error: 'Unauthorized' })
      }
    } else {
      res.status(401).json({ error: 'Missing token' })
    }
    next()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}