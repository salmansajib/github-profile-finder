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
    <div className=' bg-green-400 text-zinc-700 max-w-[400px] mx-auto rounded-md text-center p-5 mt-10 '>
      <div className=' w-[200px] h-[200px] rounded-full mx-auto overflow-hidden '>
        <img className=' block max-w-full ' src={avatar_url} alt='user image' />
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
