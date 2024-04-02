import { useEffect, useState } from 'react';

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState('salmansajib');
  const [userDate, setUserData] = useState(null);

  // fetch the github user data
  const fetchGithubUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    console.log(data);
  };

  const handleSubmit = () => {};

  // fetch the data when component mounts
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div>
      <div>
        <input
          className='border border-black placeholder:text-sm'
          type='text'
          name='search-by-username'
          placeholder='Search Github Username...'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        {/* <div> {userName} </div> */}
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
