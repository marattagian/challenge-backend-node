import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/Users'

const secret = process.env.JWT_SECRET
const createToken = (payload) => jwt.sign(payload, secret)

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) res.status(401).json({ message: 'User not found' })
    const match = await bcrypt.compare(password, user.password)
    if (match) {
      const token = createToken(user)
      res.json({ token })
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    if (email && password) {
      const newUser = await User.create({
        email,
        password: await bcrypt.hash(password,salt)
      })
      res.json(newUser)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}