import {ChangeEvent, useState} from 'react';
import {StarsDescription} from '../../const-components.ts';

function SendComment(): JSX.Element {
  const [formState, setFormState] = useState({rating: '', review: ''});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name;
    setFormState((prevState) => ({...prevState, [key]: e.target.value}));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (_, index) => 5 - index).map((n) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={`${n}`} id={`${n}-stars`}
              type="radio" onChange={handleChange}
            >
            </input>
            <label htmlFor={`${n}-stars`} className="reviews__rating-label form__rating-label"
              title={StarsDescription[n]}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
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
        <button className="reviews__submit form__submit button" type="submit" disabled
          onClick={() => {}}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default SendComment;
