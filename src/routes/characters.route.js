import { Router } from "express";
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
router.delete('/characters/:id', deleteCharacter)
router.put('/characters/:id', updateCharacter)
router.post('/characters', createCharacter)

export default router