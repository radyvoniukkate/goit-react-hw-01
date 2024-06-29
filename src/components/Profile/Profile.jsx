import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="userCard">
      <div className="usrInfo">
        <div className="imgBox">
          <img src={image} alt="User avatar" className="usrImg" />
        </div>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="list">
        <li className="listItem">
          <span>Followers</span>
          <span className="span">{stats.followers}</span>
        </li>
        <li className="listItem">
          <span>Views</span>
          <span className="span">{stats.views}</span>
        </li>
        <li className="listItem">
          <span>Likes</span>
          <span className="span">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;
