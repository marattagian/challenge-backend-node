import jwt from 'jsonwebtoken'

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded
      req.token = token
      next()
    }
    res.status(401).json({ error: 'Unauthorized' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}