import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage } from '../../utils/localStorage';

const Header = ({}) => {

  const logOut = () => {
    // Clear user data
    localStorage.removeItem('loggedIn');  
    localStorage.removeItem('loggedInUserData');  

    // Redirect to login page
    window.location.href = "/login";  
  };

  return (
    <div className='flex text-white items-end w-full justify-between'>
      <h1 className='text-2xl w-full font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'></span>
      </h1>

      <button
        onClick={logOut}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
      >
        Log-Out
      </button>
    </div>
  );
};

export default Header;
