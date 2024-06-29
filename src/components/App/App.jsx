
import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import FriendList from '../FriendsList/FriendList';
import friendData from '../../friendData.json';
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactionData from "../../transactionData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionData} />
    </>
  );
};




export default App;
