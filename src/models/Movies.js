import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { Character } from "./Character.js"
import { Genre } from "./Genre.js"

export const Movies = sequelize.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.STRING,
    validate: { isUrl: true }
  },
  title: { type: DataTypes.STRING },
  date: { type: DataTypes.DATEONLY },
  score: {
    type: DataTypes.INTEGER,
    validate: {
      max: 5,
      min: 0
    }
  },
})

Movies.belongsToMany(Character, { through: 'MoviesCharacter' })
Character.belongsToMany(Movies, { through: 'MoviesCharacter' })

Movies.belongsToMany(Genre, { through: 'MoviesGenre' })
Genre.belongsToMany(Movies, { through: 'MoviesGenre'})