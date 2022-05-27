import { User } from '../models/Users'

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email, password } })
    res.json(user)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    if (email && password) {
      const newUser = await User.create({ email, password })
      res.json(newUser)
    }
  } catch (error) {
  }
}