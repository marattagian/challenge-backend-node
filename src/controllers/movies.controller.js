import { Movies } from "../models/Movies.js"
import { Character } from "../models/Character.js"

export const getMovies = async (req, res) => {
  try {
    const movies = await Movies.findAll({ include: Character })
    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movies.findOne({ where: { id }})
    res.json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createMovie = async (req, res) => {
  try {
    const { id, image, title, date, score, characters } = req.body
    const movie = await Movies.create({
      id,
      image,
      title,
      date,
      score,
      characters
    }, { include: Character })
    res.json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { image, title, date, score, characters } = req.body
    const movie = await Movies.update({
      image,
      title,
      date,
      score,
      characters
    }, { where: { id }})
    res.json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    await Movies.destroy({ where: { id } })
    res.status(204)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}