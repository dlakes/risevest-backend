import { IsNotEmpty } from 'class-validator';

export class CommentRequest {
  @IsNotEmpty()
  content: string;
}
