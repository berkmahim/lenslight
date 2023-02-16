import {Router} from 'express'
import * as userController from "../controllers/userController.js";

const router = Router()

router.route('/register').post(userController.createUser)
export default router