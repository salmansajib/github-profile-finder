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
      setUserName('');
    }
    console.log(data);
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

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
    <div className=' min-h-dvh text-gray-50 bg-zinc-950'>
      <div className=' flex gap-2 items-center justify-center py-4'>
        <input
          className=' bg-gray-50 px-2 py-1 rounded-sm text-zinc-900 placeholder:text-sm'
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
