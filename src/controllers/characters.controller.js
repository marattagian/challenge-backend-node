import { Character } from "../models/Character.js"
import { Movies } from "../models/Movies.js"

export const getCharacters = async (req, res) => {
  const characters = await Character.findAll({ include: Movies })
  res.json(characters)
}


export const createCharacter = async (req, res) => {
  const { id, image, name, age, weight, story, movies } = req.body

  try { 
    const newCharacter = await Character.create({
      id,
      image,
      name,
      age, 
      weight,
      story,
      movies
    }, { include: Movies })

    res.json(newCharacter)

  } catch (error) {

    return res.status(500).json({ message: error.message})
  }

}

export const getCharacter = async (req, res) => {
  res.status(200)
}

export const updateCharacter = async (req, res) => {
  res.status(200)
}

export const deleteCharacter = async (req, res) => {
  res.status(200)
}