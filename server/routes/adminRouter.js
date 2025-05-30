import {Router} from 'express';
import { loginAdmin, registerAdmin,logoutAdmin, deleteAdminById,getAllAdmin} from '../controller/adminController.js';
import upload from '../multer/multer.js';

const adminRouter=Router();
adminRouter.route('/registeradmin').post(registerAdmin);
adminRouter.route('/loginadmin').post(loginAdmin);
adminRouter.route('/logoutadmin').post(logoutAdmin);
adminRouter.route('/getalladmin').get(getAllAdmin);
adminRouter.route('/deleteadmin/:id').delete(deleteAdminById);




export default adminRouter

