import './Spinner.css';

export function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading</div>
    </div>
  );
}
