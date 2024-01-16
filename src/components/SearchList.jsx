import React from 'react';

const SearchList = (user) => {


  return (
    // users.map((user) => (
      <div className='flex flex-row flex-start items-center m-4 w-96 drop-shadow-lg bg-white'>
        <img className='w-8 h-8  object-contain object-center mr-2 rounded-full bg-white' alt='profile_img' src={user.thumbnail} />
        
        <h4 className='ml-1'>{user.name}</h4>
        <h6 className=' text-sm text-gray ml-4'>{user.email}</h6>
      </div>
    // ))
  );
}

export default SearchList;
