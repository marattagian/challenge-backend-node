import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Character = sequelize.define('characters',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true,
  },
  image: {
    type: DataTypes.STRING,
    validate: { isUrl: true }
  },
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.FLOAT },
  story: { type: DataTypes.STRING }
})