import Review from '../../types/review';
import ReviewItem from './review_item.tsx';

type ReviewListProps = {
  reviews: Review[];
}

export function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
