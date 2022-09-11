import Profile from './profile/Profile';
import Statistics from './statistic/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory  from './transaction/TransactionHistory'


import user from '../jsonFile/user.json';
import data from '../jsonFile/data.json';
import friends from '../jsonFile/friends.json';
import transactions from '../jsonFile/transactions.json'


const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
  </div>
);

export default App;

