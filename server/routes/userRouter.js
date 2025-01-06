import { Router } from 'express'
import { registerUser, refreshAccessToken, logoutUser}from "../controller/userController.js"

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/refresh').get(refreshAccessToken)
userRouter.route('/logout').post(logoutUser)

export default userRouter