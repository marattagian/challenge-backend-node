import { Character } from "../models/Character.js"
import { Movies } from "../models/Movies.js"

export const getCharacters = async (req, res) => {
  const characters = await Character.findAll()
  res.json(characters)
}


export const createCharacter = async (req, res) => {
  const { image, name, age, weight, story, movies } = req.body

  try { 
    const newCharacter = await Character.create({
      image, name, age, weight, story })

    movies.forEach(async (movie) => await Movies.findOrCreate({
      where: { title: movie }
    }))

    res.json(newCharacter)

  } catch (error) {

    return res.status(500).json({ message: error.message})
  }

}

export const getCharacter = async (req, res) => {}

export const updateCharacter = async (req, res) => {}

export const deleteCharacter = async (req, res) => {}

export const getCharacterMovies = async (req, res) => {}