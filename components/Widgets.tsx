import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline'>
      {/* search */}
      <div className='flex items-center space-x-2 bg-gray-100 p-3 mt-2 rounded-full'>
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input
          type='text'
          placeholder='Search twitter'
          className='flex-1 outline-none bg-transparent'
        />
      </div>

      <div className='mt-2'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='saitejabevara'
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
