import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

export default function AdminProtected({children}) {
  let {adminflag} = useContext(UserContext)
  if(adminflag){
    return children
  }else{
    return <Navigate to='/admin/login'/>
  }
}
