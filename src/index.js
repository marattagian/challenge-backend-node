import app from './app.js'
import { sequelize } from "./database/database.js"
import "./models/Character.js"
import "./models/Genre.js"
import "./models/Movies.js"
// import { Character } from "./models/Character.js"
// import { Movies } from "./models/Movies.js"

async function main() {
  try {
    await sequelize.sync({ force: true })
    app.listen(3000)
    console.log("Server is running on port", 3000)
  } catch (error) {
    console.error("unable to connect to the database", error)
  }
}

main()