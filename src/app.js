import express from "express"
import charactersRoutes from "./routes/characters.route.js"
import moviesRoutes from "./routes/movies.route.js"

const app = express()

app.use(express.json())
app.use(charactersRoutes)
app.use(moviesRoutes)

export default app