import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios';

export default function UserContextProvider({children}) {
    let [flag, setFlag] = useState(false)
    let [adminflag, setAdminFlag] = useState(false)

    let [auth, setAuth] = useState({
        token: localStorage.getItem('token') || null,
        userData: ''
    })

    let userLogin = async (data)=>{
      const response = await axios.post('http://localhost:3000/api/clientLogin', data);
        if(response.data.isMatch == true){
            setFlag(true)
            let token = response.data.token
            localStorage.setItem('token', token)
            setAuth({token: token, userData: data})
            return true
        }else{
            return false
        }
    }

    let verifyClient = async ()=>{
        let token =localStorage.getItem('token')
        if(token){
            let result = await axios.post('http://localhost:3000/api/clientVerify',{},{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            setFlag(true)
            setAuth((prevAuth)=>({...prevAuth, userData:result.data}))
        }
    }

   let clientLogout = ()=>{
        setFlag(false)
        localStorage.removeItem('token')
        setAuth({token: null, userData:''})
    }
console.log(auth)
    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            verifyClient()
        }
    },[])

  return (
    <UserContext.Provider value={{flag, setFlag, userLogin, clientLogout, auth, adminflag, setAdminFlag}}>
      {children}
    </UserContext.Provider>
  )
}
