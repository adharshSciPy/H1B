import {Router} from 'express';
import { registerAdmin,adminLogout } from '../controller/adminController.js';
const adminRouter=Router();
adminRouter.route('/registeradmin').post(registerAdmin);
adminRouter.route('/logout').post(adminLogout)

export default adminRouter

