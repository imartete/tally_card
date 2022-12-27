import PropTypes from 'prop-types';
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

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isFollowing: PropTypes.bool.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
