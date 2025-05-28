import { Router } from 'express';
import { fetchSortedLinks, linkPost, updateLink } from '../controller/linkController.js';
const linkRouter=Router();
linkRouter.route("/link-post").post(linkPost);
linkRouter.route("/fetch-links").get(fetchSortedLinks);
linkRouter.route("/edit-link/:id").put(updateLink);


export default linkRouter