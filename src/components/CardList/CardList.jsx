// import PropTypes from 'prop-types';
import { TallyCard } from 'components/TallyCard/TallyCard';
import './CardList.modules.css';

export function CardList({ users, onClick }) {
  return (
    <ul className="card-list">
      {users.map(user => (
        <TallyCard
          key={user.id}
          isFollowing={user.isFollowing}
          buttonText={user.isFollowing ? 'following' : 'follow'}
          tweets={user.tweets}
          followers={user.followers}
          user={user.user}
          avatarULR={user.avatar}
          onClick={() => {
            onClick(user.id);
          }}
        />
      ))}
    </ul>
  );
}
