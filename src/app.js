import express from "express"
import charactersRoutes from "./routes/characters.route.js"

const app = express()

app.use(express.json())
app.use(charactersRoutes)

export default app