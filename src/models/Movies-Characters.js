import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const MoviesCharacters = sequelize.define('Movies_Characters', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  characterId: {
    type: DataTypes.INTEGER,
    foreignKey: true
  }
})