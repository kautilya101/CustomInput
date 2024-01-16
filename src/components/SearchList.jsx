import React from 'react';
// Suggestion list 
const SearchList = ({users,handleSelect}) => {

  const handleClick = (user) => {
    handleSelect(user);
  }

  return (
    users.map((user,index) => (
      <div className='flex flex-row flex-start drop-shadow-lg cursor-pointer
            items-center p-2 m-1 w-96 
            bg-white rounded-lg z-20' onClick={() => handleClick(user)}>
        <img className='w-8 h-8  object-contain object-center mr-2 rounded-full bg-white' alt='profile_img' src={user.thumbnail} />
        <h4 className='ml-1'>{user.name}</h4>
        <h6 className=' text-sm text-gray ml-4'>{user.email}</h6>
      </div>
    ))
  );
}

export default SearchList;
