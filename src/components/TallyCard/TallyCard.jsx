import PropTypes from 'prop-types';
import toNumWithComa from 'utils/toNumWithComa';
import './TallyCard.modules.css';
import { Button } from 'components/Button/Button';

export function TallyCard({
  user,
  tweets,
  followers,
  avatarULR,
  onClick,
  isFollowing,
}) {
  return (
    <li className="cardItem">
      <div className="logo"></div>
      <div className="cardPlaceholder"></div>
      <div className="cardImage">
        <img src={avatarULR} alt={user} className="avatar" />
      </div>
      <div>
        <ul className="cardMeta">
          <li>{toNumWithComa(tweets)} tweets</li>
          <li>{toNumWithComa(followers)} followers</li>
        </ul>
        <Button isFollowing={isFollowing} onClick={onClick} />
      </div>
    </li>
  );
}

TallyCard.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatarULR: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
