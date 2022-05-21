import { Character } from "../models/Character.js"
import { Movies } from "../models/Movies.js"

export const getCharacters = async (req, res) => {
  const characters = await Character.findAll({
    attributes: [ 'image', 'name'],
    include: Movies
  })
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
  const { id } = req.params

  try {

    const character = await Character.findOne({ where: { id } })
    res.json(character)
    
  } catch (error) {
    
    res.status(500).json({ message: error.message })

  }
}

export const updateCharacter = async (req, res) => {
  const { id } = req.params
  try {

    const { image, name, age, weight, story, movies } = req.body
    const updatedCharacter = await Character.update({
      image,
      name,
      age,
      weight,
      story,
      movies
    }, { where: { id } })
    res.json(updatedCharacter)
    
  } catch (error) {

    res.status(500).json({ message: error.message })

  }
}

export const deleteCharacter = async (req, res) => {
  const { id } = req.params
  try {
    await Character.destroy({ where: { id } })
    res.status(204)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}