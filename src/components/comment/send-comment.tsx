import {ChangeEvent, FormEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {addComment} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';
import {RatingStar} from '../rating-star/rating-star.tsx';
import {MAX_COMMENT_TEXT_LENGTH, MIN_COMMENT_TEXT_LENGTH} from '../../consts/integer-consts.ts';

function SendComment(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const {offerId} = useParams();
  const dispatch = useAppDispatch();

  const changeText = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setReview(event.target.value);
  const changeRating = (event: ChangeEvent<HTMLInputElement>) =>
    setRating(+event.target.value);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating !== null && review !== null) {
      dispatch(addComment({
        offerId,
        comment: {
          rating: +rating,
          comment: review,
        }
      })).then(() => {
        setIsDisabled(true);
        setReview('');
        setRating(0);
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (_, index) => 5 - index).map((n) => (
          <RatingStar rating={n} handleChange={changeRating} key={n}/>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={review}
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={changeText}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isDisabled || rating === 0 || review.length < MIN_COMMENT_TEXT_LENGTH || review.length > MAX_COMMENT_TEXT_LENGTH}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default SendComment;
