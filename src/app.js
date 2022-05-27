import express from "express"
import 'dotenv/config'
import charactersRoutes from "./routes/characters.route.js"
import moviesRoutes from "./routes/movies.route.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()

app.use(express.json())
app.use(charactersRoutes)
app.use(moviesRoutes)
app.use('/auth', authRoutes)

export default app