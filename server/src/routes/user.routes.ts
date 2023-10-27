import { Router } from "express";
import * as userController from '../controllers/user.controllers'
import { verifyToken } from "~/middlewares";

const userRouter = Router()

userRouter.get('/', verifyToken, userController.getProfile)
userRouter.get('/all', verifyToken, userController.getAllUser)
userRouter.get('/:id', verifyToken, userController.getUser)
userRouter.post('/login', userController.login)
userRouter.get('/search/:key', userController.searchUser)
userRouter.post('/', verifyToken, userController.createUser)

export default userRouter