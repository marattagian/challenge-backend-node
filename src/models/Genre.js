import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Genre = sequelize.define('genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
})