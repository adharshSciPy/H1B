import { Router } from "express";
import { addCollaborator, editCollaborator } from "../controller/collaboratorController.js";
const collaboratorRouter=Router();
collaboratorRouter.route('/registercollaborator').post(addCollaborator);
collaboratorRouter.route('/editcollaborator/:id').patch(editCollaborator);

export default collaboratorRouter;
