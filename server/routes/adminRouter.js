import {Router} from 'express';
import { registerAdmin,adminLogout,editAdmin } from '../controller/adminController.js';
const adminRouter=Router();
adminRouter.route('/registeradmin').post(registerAdmin);
adminRouter.route('/logout').post(adminLogout)
adminRouter.route('/editadmin/:id').patch(editAdmin);

export default adminRouter

