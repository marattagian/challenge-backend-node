import { Router } from "express";
import checkAuth from "../middleware/checkAuth.js"
import {
  createCharacter,
  getCharacters,
  getCharacter,
  deleteCharacter,
  updateCharacter
} from "../controllers/characters.controller.js"

const router = Router()

router.get('/characters', getCharacters)
router.get('/characters/:id', getCharacter)
router.delete('/characters/:id', checkAuth, deleteCharacter)
router.put('/characters/:id', checkAuth, updateCharacter)
router.post('/characters', checkAuth, createCharacter)

export default router