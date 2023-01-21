import { Router } from "express";
import { getParticipant, getParticipants, saveParticipant, registerForm } from "../controllers/participants_controller.js";

const router = Router()

router.get('/register', registerForm)
router.get('/:id', getParticipant)
router.get('/', getParticipants)
router.post('/register', saveParticipant)

export default router