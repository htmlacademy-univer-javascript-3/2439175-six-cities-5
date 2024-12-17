import {useAppSelector} from '../../hooks';
import './error-message.css';
import {Reducers} from '../../types/reducer.ts';

export function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state[Reducers.Main].error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}
