import React, { createContext, useContext } from 'react'
import UserContext from '../utils/UserContext';

const Footer = () => {

  const {user} = useContext(UserContext)

    return (
      <div>
    <h4>Footer</h4>

    <h5  className='p-10 m-10'>This Site is Developed by {user.name} - {user.email}</h5>
    </div>
    );
  };
  

export default Footer 