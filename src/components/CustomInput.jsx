import React, { useState } from 'react';
import InputItemList from './InputItemList';
import { mockusers } from '../data/mockData';
import SearchList from './SearchList';
import { AutoComplete } from 'primereact/autocomplete';

const CustomInput = () => {
  const [users,setUsers] = useState([]);
  const [mockData,setMockData] = useState(mockusers);
  const [filteredUsers,setFilteredUsers] = useState([])
  const [name,setName] = useState('');

  const removeUser = (index) => {
    const newUsers = users.filter((item,ind) => ind != index)
    setUsers(newUsers);
  }

  const handleSelect = (event) => {
    const arr = [...users,event.value];
    setUsers(arr);
    setName('');
  }

  const filterUsers = (e) => {
    const arr = mockData.filter((user) => {
      return user.name.toLowerCase().startsWith(e.query.toLowerCase())
    })
    setFilteredUsers(arr);
  }

  return (
      <>
      <div className='bg-white w-3/5 flex flex-row flex-wrap items-center mt-4 m-auto border-2 border-b-blue-600'>
        <div className=' flex flex-row items-start justify-center' >  
          <InputItemList users={users} removeUser={removeUser} />
        </div>
        <AutoComplete
          className=' m-5 p-3 w-72 rounded-md'
          inputClassName=' focus-visible:outline-none'
          type='text'
          value={name}
          placeholder='Add New user'
          onChange={(e) => setName(e.value)}
          suggestions={filteredUsers}
          itemTemplate={SearchList}
          completeMethod={filterUsers}
          onSelect={ (event) => handleSelect(event)}
        />

      </div>
      </>
  );
}

export default CustomInput;
