import { useEffect, useState } from 'react';

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState('salmansajib');

  const handleSubmit = () => {};

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
