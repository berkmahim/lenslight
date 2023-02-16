import {Router} from 'express'
import * as pageController from "../controllers/pageController.js";

const router = Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/register').get(pageController.getRegisterPage)

export default router