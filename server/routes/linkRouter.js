import { Router } from 'express';
import { linkPost } from '../controller/linkController.js';
const linkRouter=Router();
linkRouter.route("/link-post").post(linkPost);
export default linkRouter