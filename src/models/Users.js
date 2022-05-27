import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const User = sequelize.define('user',{
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING }
})