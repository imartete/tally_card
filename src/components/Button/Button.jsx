import PropTypes from 'prop-types';
import './Button.modules.css';

export function Button({ isFollowing, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isFollowing ? 'following button' : 'notFollowing button'}
    >
      {isFollowing ? 'following' : 'follow'}
    </button>
  );
}

Button.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
