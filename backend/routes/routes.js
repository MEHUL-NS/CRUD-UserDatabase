import express from "express";
import {addUser , getUser , getSingleUser , editUser , deleteUser} from '../controllers/userController.js'


const router = express.Router()

router.post('/add' , addUser)
router.get('/all', getUser)
router.get('/:id' , getSingleUser)
router.put('/:id' , editUser)
router.delete('/:id' , deleteUser)


export default router;
