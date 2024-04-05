import { Request } from 'express';
import UserService from '../services/UserService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class UserController {

  constructor(public userService: UserService) {}

  getAllUsers = asyncWrapper(async () => {
    const response = await this.userService.getAllUsers();
    return new SuccessResponse(response);
  });

  createUser = asyncWrapper(async (req: Request) => {
    const { email, name, password } = req.body;
    const response = await this.userService.createUser(email, name);
    return new SuccessResponse(response);
  });

  userPosts = asyncWrapper(async (req: Request) => {
    const { userId } = req.params;
    const response = await this.userService.getUserPosts(userId);
    return new SuccessResponse(response);
  });

  createPost = asyncWrapper(async (req: Request) => {
    const { userId } = req.params;
    const { title, body } = req.body;
    const response = await this.userService.createPost(userId, title, body);
    return new SuccessResponse(response);
  });
  
  addComment = asyncWrapper(async (req: Request) => {
    const { postId } = req.params;
    const { content } = req.body;
    const response = await this.userService.addComment(postId, content);
    return new SuccessResponse(response);
  });

  getComments = asyncWrapper(async (req: Request) => {
    const { postId } = req.params;
    const response = await this.userService.getComments(postId);
    return new SuccessResponse(response);
  });
  
}
