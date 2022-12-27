import { Section } from 'components/Section/Section';
import { CardList } from 'components/CardList/CardList';
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
  }, [users]);

  function updateFollowers(id) {
    const newUsers = users.map(account => {
      if (id === account.id) {
        return {
          ...account,
          isFollowing: !account.isFollowing,
          followers: account.isFollowing
            ? account.followers - 1
            : account.followers + 1,
        };
      }
      return account;
    });

    setUsers(newUsers);
  }

  return (
    <Section>
      <CardList users={users} onClick={updateFollowers} />
    </Section>
  );
}
