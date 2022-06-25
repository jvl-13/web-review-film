import {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {setGuest, setUserAccess} from '../../features/users/userSlice'
import Home from './Home'


function User() {
    // const userStoreId = useSelector(state => state.user.userId)
    // const userStoreToken = useSelector(state => state.user.accessToken)
    const dispatch = useDispatch()
    // console.log(userStoreId)
    // console.log(userStoreToken)
    const [success, setSuccess] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        await dispatch(setGuest())
        setSuccess(true)
        // console.log(userStoreId)
        // console.log(userStoreToken)
    }
  return (
    <>
        {success ? (
            <Home />
        ) : (
            <div className='user-page'>
                <button onClick={handleClick}>Log out</button>
            </div>
        )}
    </>
  )
}

export default User