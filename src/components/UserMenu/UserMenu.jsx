import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "../../redux/auth/authOperations"

export const UserMenu = () => {

  const dispatch = useDispatch()
  
  const profile = useSelector(state => state.auth.profile)
  
  
  
  
    function handleLogout() {
    dispatch(logoutThunk())
  }
 
  return (<>
    <div>    
      <p>{ profile?.name}</p>
  <button onClick={handleLogout}>Logout</button>

    </div>
    </>

  )
}





