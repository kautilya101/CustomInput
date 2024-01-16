import React from 'react';
import Item from './Item';

const InputItemList = ({backclicked,users, removeUser}) => {
  //
  return (
      users.map((user,index) => (
        <Item backClicked={backclicked} user={user} index={index} rmUser={removeUser} key={`user-${index} `}/>
      ))

  );
}

export default InputItemList;
