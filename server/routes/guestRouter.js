import { Router } from 'express'
import { loginGuest}from "../controller/guestController.js"

const guestRouter = Router()

guestRouter.route('/guestlogin').post(loginGuest)


export default guestRouter