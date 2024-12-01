import Comment from '../../types/comment.ts';
import ReviewItem from './review-item.tsx';
import {useAppSelector} from '../../hooks';


export function ReviewList(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review: Comment) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
}
