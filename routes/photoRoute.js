import {Router} from 'express'
import * as photoController from "../controllers/photoController.js";

const router = Router()

router.route('/').post(photoController.createPhoto)
    .get(photoController.getAllPhotos)
router.route('/:id').get(photoController.getPhoto)
export default router