const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friendInfo">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friendName">{name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
