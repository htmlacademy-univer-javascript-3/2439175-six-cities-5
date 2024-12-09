import {ChangeEvent, FormEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {addComment} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';
import {RatingStar} from '../rating-star/rating-star.tsx';

function SendComment(): JSX.Element {
  const [formState, setFormState] = useState({rating: '', review: ''});
  const [isDisabled, setIsDisabled] = useState(false);
  const {offerId} = useParams();
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name;
    setFormState((prevState) => ({...prevState, [key]: e.target.value}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const rating = formData.get('rating');
    const comment = formData.get('review');
    if (rating !== null && comment !== null) {
      dispatch(addComment({
        offerId,
        comment: {
          rating: +rating,
          comment: comment.toString()
        }
      })).then(() => {
        setIsDisabled(true);
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
          <RatingStar rating={n} handleChange={handleChange} key={n}/>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formState.review}
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default SendComment;
