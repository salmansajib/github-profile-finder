/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    login,
    name,
    public_repos,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  // console.log(createdDate);

  return (
    <div>
      <div>
        <img src={avatar_url} alt='user image' />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login} </a>
        <p>
          User joined on{' '}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', {
            month: 'short',
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
          <p>Public Repos</p>
          <p> {public_repos} </p>
        </div>
        <div>
          <p>Followers</p>
          <p> {followers} </p>
        </div>
        <div>
          <p>Following</p>
          <p> {following} </p>
        </div>
      </div>
    </div>
  );
};

export default User;
