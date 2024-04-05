import { Service } from 'typedi';
import UserRepository from '../repositories/UserRepository';

@Service()
export default class UserService {
  constructor(public userRepository: UserRepository) {}

  getAllUsers = async () => {
    return await this.userRepository.getAllUsers();
  };

  createUser = async (email: string, name: string) => {
    const result = this.userRepository.createUser(name, email);
    return result;
  };

  getUserPosts = async (userId: string) => {
    return await this.userRepository.getUserPosts(userId);
  };

  createPost = async (userId: string, title: string, body: string) => {
    const result = this.userRepository.createPost(userId, title, body);
    return result;
  };


  addComment = async (postId: string, content: string) => {
    const result = this.userRepository.addComment(postId, content);
    return result;
  };

  getComments = async (postId: string) => {
    return await this.userRepository.getComments(postId);
  };
  
}
