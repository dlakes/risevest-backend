import { User } from '../models/User';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { Service } from 'typedi';
import { ApplicationError } from '../utils/ApiError';

@Service()
export default class UserRepository {

  getAllUsers = async (): Promise<User[]> => {
    return await User.findAll();
  };

  createUser = async (name: string, email: string): Promise<User> => {
    const user = User.build({ name, email});
    return await user.save();
  };

  getUserPosts = async (userId: string): Promise<User | null> => {

    const user = await User.findByPk(userId, {
      include: [
        { 
          model: Post,
          include: [
            { model: Comment }
          ] 
        }
      ],
    });

    return user;

  };

  createPost = async (userId: string, title: string, body: string): Promise<Post> => {
    // const post = Post.build({ userId, title, body});
    // return await post.save();

    const user = await User.findByPk(userId);
    if (!user) {
      throw new ApplicationError('User not found');
    }

    // Create the post associated with the user
    return await Post.create({
      userId,
      title,
      body,
    });

  };

  addComment = async (postId: string, content: string): Promise<Comment | null> => {
      // Find or create the post
      const post = await Post.findByPk(postId);
      if (!post) {
        throw new ApplicationError('Post not found');
      }
  
      // Create the comment associated with the post
      return await Comment.create({
        postId: post.id, // Set the postId to associate the comment with the post
        content,
      });

  };

  getComments = async (postId: string): Promise<Post | null> => {
    
    return await Post.findByPk(postId, {
    include: [
      { 
        model: Comment
      }
    ],
  });


};

}
