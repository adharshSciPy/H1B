import { Router } from 'express';
import { deleteSocialMediaPost, getAllSocialMediaPosts, getSocialMediaPostById, postSocialMedia, updateSocialMediaPost } from '../controller/socialMediaController.js';
import uploadSocialMedia from '../multer/socialMediaMulter.js';
const socialMediaRouter=Router();
socialMediaRouter.route("/add-social").post(uploadSocialMedia.single("image"), postSocialMedia);
socialMediaRouter.route("/fetch-all").get(getAllSocialMediaPosts);
socialMediaRouter.route("/fetch-single/:id").get(getSocialMediaPostById);
socialMediaRouter.route("/delete/:id").delete(deleteSocialMediaPost);
socialMediaRouter.route("/edit-social/:id").put(uploadSocialMedia.single("image"),updateSocialMediaPost);





export default socialMediaRouter