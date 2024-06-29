import "./FriendList.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
        return (
            <ul className="friendList">
                {friends.map((friend) => (
                    <li className="friendItem" key={friend.id}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        );
}

export default FriendList;

