import React, { useEffect, useState } from "react";
import InputItemList from "./InputItemList";
import { mockusers } from "../data/mockData";
import SearchList from "./SearchList";

const CustomInput = () => {
  const [users, setUsers] = useState([]);
  const [mockData, setMockData] = useState(mockusers);
  const [filteredUsers, setFilteredUsers] = useState(mockData);
  const [name, setName] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [backClicked, setBackClicked] = useState(false);

  const removeUser = (index) => {
    const newUsers = users.filter((item, ind) => ind != index);
    setUsers(newUsers);
  };

  const handleSelect = (user) => {
    console.log(user);
    const arr = [...users, user];
    setUsers(arr);
    setName("");
  };

  const filterUsers = (e) => {
    const arr = mockData.filter((user) => {
      return user.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });
    setFilteredUsers(arr);
  };

  const handleKeyDown = (event) => {
    console.log(backClicked);
    if (event.key === "Backspace" && name == "" && backClicked == true) {
      // delete last user
    }
    if (event.key === "Backspace" && name == "") {
      setBackClicked(true);
    }
  };

  useEffect(() => {
    const newarr = mockData.filter((user) => !users.includes(user));
    setFilteredUsers(newarr);
  }, [users]);

  return (
    <>
      <div className="bg-white w-3/5 flex flex-row flex-wrap items-center mt-4 m-auto border-2 border-b-blue-600">
        <div className=" flex flex-row flex-wrap items-start justify-center">
          {/* chips are added */}
          <InputItemList
            backclicked={backClicked}
            users={users}
            removeUser={removeUser}
          />
        </div>
        <form onSubmit={handleSelect}>
          <input
            className=" m-5 p-3 w-72 rounded-md outline-none"
            type="text"
            value={name}
            placeholder="Add New user"
            onChange={(e) => {
              setName(e.value);
              filterUsers(e);
            }}
            onFocus={() => {
              setInputFocus(true);
            }}
            onBlur={() => setBackClicked(false)}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
      <div className={`${inputFocus ? "flex-col" : "hidden"}`}>
        <SearchList users={filteredUsers} handleSelect={handleSelect} />
      </div>
    </>
  );
};

export default CustomInput;
