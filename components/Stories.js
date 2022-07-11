import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(14)].map((_, i) => ({
      id: i,
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
    }));
    setSuggestions(suggestions);
  }, [])

  const { data: session } = useSession();

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>

      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map(profile => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  )
}

export default Stories