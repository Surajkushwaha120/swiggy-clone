import React, { useContext } from 'react'
import { Component } from 'react'
import Profile from './Profile'
import Header from "./Header"
import UserContext from '../utils/UserContext'


class About extends Component{


 
    render (){
       

        return (
            <div>
               
               <UserContext.Consumer>
                {({user}) => <h4 className='font-bold text-xl p-10'>{user.name}</h4>}
               </UserContext.Consumer>
           
                <h1>About us Page</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates optio, delectus quaerat expedita ab eligendi?
                </p>
                <Profile  xyz="abc" />
              
              
            </div>
        )
    }
}

export default About;