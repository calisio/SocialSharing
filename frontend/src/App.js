import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StartScreen from './components/StartScreen'

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

  return (
    <StartScreen />


    // <div>
    //   {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    // </div>
  )
}

export default App