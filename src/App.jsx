import { Section } from 'components/Section/Section';
import { TallyCard } from 'components/Section/TallyCard/TallyCard';
import { useState, useEffect } from 'react';
import accounts from 'data/users.json';

const LOCAL_STORAGE_KEY = 'accounts';

export function App() {
  const storedAccounts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [users, setUsers] = useState(JSON.parse(storedAccounts) ?? accounts);

  useEffect(() => {
    if (users !== accounts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }
  }, users);

  function updateFollowers(id) {
    const newUsers = users.map(account => {
      if (id === account.id && !account.isFollowing) {
        return {
          ...account,
          followers: account.followers + 1,
          isFollowing: true,
        };
      }

      if (id === account.id && account.isFollowing) {
        return {
          ...account,
          followers: account.followers - 1,
          isFollowing: false,
        };
      }

      return account;
    });

    setUsers(newUsers);
  }

  return (
    <div>
      <Section>
        {users.map(user => (
          <TallyCard
            key={user.id}
            id={user.id}
            buttonText={user.isFollowing ? 'following' : 'follow'}
            tweets={user.tweets}
            followers={user.followers}
            user={user.user}
            avatarULR={user.avatar}
            onClick={() => {
              updateFollowers(user.id);
            }}
          />
        ))}
      </Section>
    </div>
  );
}
