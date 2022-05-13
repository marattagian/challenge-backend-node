import Sequelize from "sequelize-cockroachdb"
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL 
export const sequelize = new Sequelize(connectionString)
