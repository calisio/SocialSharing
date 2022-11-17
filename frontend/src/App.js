import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StartScreen from './pages/StartScreen'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  // const [users, setUsers] = useState([])
  // const getData = async() => {
  //   const res = await axios.get('api/users')
  //   setUsers(res.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
 
//console.log(users)

//in return
// <div>
    //   {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    // </div>

  return (
    <div>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/myfeed' element={<Feed />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App