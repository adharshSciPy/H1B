import {Router} from 'express';
import { registerAdmin,adminLogout,editAdmin, getCollaborators, getSingleCollaborator, deleteCollaborator} from '../controller/adminController.js';
const adminRouter=Router();
adminRouter.route('/registeradmin').post(registerAdmin);
adminRouter.route('/logout').post(adminLogout);
adminRouter.route('/getallcollaborators').get(getCollaborators);
adminRouter.route('/getsinglecollaborator').get(getSingleCollaborator);
adminRouter.route('/deletecollaborator').delete(deleteCollaborator);
adminRouter.route('/editadmin/:id').patch(editAdmin);



export default adminRouter

