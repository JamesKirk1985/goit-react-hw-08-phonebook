import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginForm } from "components/LoginForm/LoginForm";


const LoginPage = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
        <>            
            {isLoggedIn ? <Navigate to='/contacts' />  : <LoginForm />}
        </>
    )
}
export default LoginPage