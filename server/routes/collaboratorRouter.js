import { Router } from "express";
import { addCollaborator, editCollaborator } from "../controller/collaboratorController.js";
import upload from '../multer/multer.js';

const collaboratorRouter=Router();
collaboratorRouter.route('/registercollaborator').post(addCollaborator);
collaboratorRouter.route('/editcollaborator/:id').patch(upload.single("image"),editCollaborator);

export default collaboratorRouter;
