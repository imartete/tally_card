// import PropTypes from 'prop-types';
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
          <li>{tweets.toLocaleString()} tweets</li>
          <li>{followers.toLocaleString()} followers</li>
        </ul>
        <Button isFollowing={isFollowing} onClick={onClick} />
      </div>
    </li>
  );
}
