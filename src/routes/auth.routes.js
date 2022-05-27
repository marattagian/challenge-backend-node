import { Router } from "express";
import { checkRegister } from "../middleware/checkRegister.js"
import { signIn, signUp } from "../controllers/auth.controller.js"

const router = Router()

router.post('/login', signIn)
router.post('/register', checkRegister, signUp)

export default router