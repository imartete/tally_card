import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './TallyCard.modules.css';

export function TallyCard({
  user,
  tweets,
  followers,
  avatarULR,
  buttonText = 'Your text',
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
        <button
          className={isFollowing ? 'following button' : 'notFollowing button'}
          type="button"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </li>
  );
}
