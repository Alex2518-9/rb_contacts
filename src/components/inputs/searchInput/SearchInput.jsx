import React, { useState } from 'react';
import Input from '../Input';
import "./SearchInput.css";

const SearchInput = ({searchedList, }) => {

    const [search, setSearch] = useState("");
  

    // const searchedContact = searchedList.filter( (contact) => {

    //     return contact.name.toLowerCase().includes(search.toLowerCase()) || contact.email.toLowerCase().includes(search.toLowerCase);
    //   })

  return (
    <Input placeholder="Search.." value={search} className="inp" onChange={(e) => setSearch(e.target.value)}/>
  )
}

export default SearchInput