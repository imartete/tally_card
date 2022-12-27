import { useState } from 'react';
import PropTypes from 'prop-types';
import './TallyCard.modules.css';

export function TallyCard({
  id,
  user,
  tweets,
  followers,
  avatarULR,
  buttonText = 'Your text',
  onClick,
}) {
  return (
    <div>
      <img src={avatarULR} alt={user} className="avatar" />
      <ul>
        <li>{tweets} tweets</li>
        <li>{followers} followers</li>
      </ul>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
