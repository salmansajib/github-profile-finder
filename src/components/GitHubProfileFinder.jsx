import { useEffect, useState } from 'react';
import User from './User';

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState('salmansajib');
  const [userDate, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch the github user data
  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  };

  const handleSubmit = () => {};

  // fetch the data when component mounts
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <h1 className=' text-2xl font-bold '>Loading data! Please wait...</h1>
    );
  }

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
      </div>
      {userDate !== null ? <User user={userDate} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
