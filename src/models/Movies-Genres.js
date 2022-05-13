import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const MoviesGenres = sequelize.define('Movies_Genres', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieId: { type: DataTypes.INTEGER },
  genreId: { type: DataTypes.INTEGER }
})