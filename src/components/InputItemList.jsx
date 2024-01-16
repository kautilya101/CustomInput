import React from 'react';
import Item from './Item';

const InputItemList = ({users, removeUser}) => {
  
  return (
      users.map((user,index) => (
        <Item user={user} index={index} rmUser={removeUser} key={`user-${index} `}/>
      ))

  );
}

export default InputItemList;
