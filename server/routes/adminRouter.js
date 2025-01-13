import {Router} from 'express';
import { registerAdmin,adminLogout,editAdmin, getCollaborators, getSingleCollaborator, deleteCollaborator, viewAdmin} from '../controller/adminController.js';
import upload from '../multer/multer.js';
const adminRouter=Router();
adminRouter.route('/registeradmin').post(registerAdmin);
adminRouter.route('/logout').post(adminLogout);
adminRouter.route('/viewadmin').get(viewAdmin);

adminRouter.route('/getallcollaborators').get(getCollaborators);
adminRouter.route('/getsinglecollaborator').get(getSingleCollaborator);
adminRouter.route('/deletecollaborator').delete(deleteCollaborator);
adminRouter.route('/editadmin/:id').patch(upload.single("image"),editAdmin);



export default adminRouter

