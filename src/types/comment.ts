import {CommentUser} from './comment-user.ts';

type Comment = {
  id: string;
  date: Date;
  user: CommentUser;
  comment: string;
  rating: number;
}

export default Comment;

