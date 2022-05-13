import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Movies = sequelize.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
  score: { type: DataTypes.INTEGER },
})