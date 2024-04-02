const User = ({ user }) => {
  const { avatar_url, followers, following, login, name, public_repos } = user;
  return (
    <div>
      <div>
        <img src={avatar_url} alt='user image' />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login} </a>
      </div>
    </div>
  );
};

export default User;
