import { Profile } from "./Profile/Profile";
import user from '../data-in/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../data-in/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../data-in/friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../data-in/transactions.json';
import { Container } from "./Container.styled";
import { GlobalStyles } from "./Global.styled";

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </Container>
  );
};
