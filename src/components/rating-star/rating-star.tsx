import {StarsDescription} from '../../const-components.ts';
import {ChangeEventHandler} from 'react';

export type RatingStarProps = {
  rating: number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export function RatingStar({rating, handleChange}: RatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${rating}`} id={`${rating}-stars`}
        type="radio" onChange={handleChange}
      >
      </input>
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label"
        title={StarsDescription[rating]}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
