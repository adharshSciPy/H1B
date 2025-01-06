import { Router } from "express";
import { addCollaborator } from "../controller/collaboratorController.js";
const collaboratorRouter=Router();
collaboratorRouter.route('/registercollaborator').post(addCollaborator);
export default collaboratorRouter;
