import { Router } from 'express';
import { fetchSortedLinks, linkPost } from '../controller/linkController.js';
const linkRouter=Router();
linkRouter.route("/link-post").post(linkPost);
linkRouter.route("/fetch-links").get(fetchSortedLinks);

export default linkRouter