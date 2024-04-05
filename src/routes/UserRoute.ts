import express from 'express';
import { CreateUserRequest } from '../requests/CreateUserRequest';
import { CreatePostRequest } from '../requests/CreatePostRequest';
import { CommentRequest } from '../requests/CommentRequest';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import UserController from '../controllers/UserController';

const router = express.Router();
const userController = Container.get(UserController);

//get users
router.get('/users',  userController.getAllUsers);
//create users
router.post('/users', RequestValidator.validate(CreateUserRequest), userController.createUser);
//get posts nb: with comments
router.get('/users/:userId/posts', userController.userPosts);
//create post
router.post('/users/:userId/posts', RequestValidator.validate(CreatePostRequest), userController.createPost);
//get post with comments
router.get('/posts/:postId/comments', userController.getComments);
//add comment to post
router.post('/posts/:postId/comments', RequestValidator.validate(CommentRequest), userController.addComment);

export default router;
