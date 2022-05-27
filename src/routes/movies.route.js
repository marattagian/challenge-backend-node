import { Router } from "express";
import checkAuth from "../middleware/checkAuth.js"
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js"

const router = new Router()

router.get('/movies', getMovies)
router.get('/movies/:id',getMovie)
router.post('/movies', checkAuth, createMovie)
router.put('/movies/:id', checkAuth, updateMovie)
router.delete('/movies/:id', checkAuth, deleteMovie)

export default router