import { User } from '../models/Users'

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ where: { email }})
    if (user) res.status(400).json({ error: 'Email already in use' })
    next()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}