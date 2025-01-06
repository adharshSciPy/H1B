import { Router } from 'express'
import { registerUser,adminlogin, refreshAccessToken, logoutUser}from "../controller/userController.js"

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/refresh').get(refreshAccessToken)
userRouter.route('/logout').post(logoutUser)
userRouter.route('/login').post(adminlogin)

export default userRouter