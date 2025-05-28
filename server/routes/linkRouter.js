import { Router } from 'express';
import { deleteLink, fetchSortedLinks, linkPost, updateLink } from '../controller/linkController.js';
const linkRouter=Router();
linkRouter.route("/link-post").post(linkPost);
linkRouter.route("/fetch-links").get(fetchSortedLinks);
linkRouter.route("/edit-link/:id").put(updateLink);
linkRouter.route("/delete-link/:id").delete(deleteLink);



export default linkRouter