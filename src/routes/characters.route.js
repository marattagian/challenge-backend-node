import { Router } from "express";
import { createCharacter, getCharacters } from "../controllers/characters.controller.js"

const router = Router()

router.get('/characters', getCharacters)
router.get('/characters/:id')
router.delete('/characters/:id')
router.put('/characters/:id')
router.post('/characters', createCharacter)

export default router