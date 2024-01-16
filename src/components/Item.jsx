import React from 'react';

const Item = ({user,index,rmUser}) => {

  const handleClick = () => {
    rmUser(index);
  }

  return (
    <div className='py-1 px-3 
      rounded-full 
       font-serif
      flex flex-row items-center justify-evenly
      border border-solid 
      hover:bg-slate-300
      my-2 mx-0.5 
       bg-gray-300 '
       
      >
      <img className='w-8 h-8  object-contain object-center mr-2 rounded-full bg-white' alt='profile_img' src={user.thumbnail} />
      {user.name}
      <div className='ml-2 text-gray-600 cursor-pointer cross' onClick={handleClick}>
      &times;
      </div>
    </div>
  );
}

export default Item;
