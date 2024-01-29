import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RegisterForm } from "components/RegisterForm/RegisterForm";


const RegisterPage = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    return (
        <>            
            {isLoggedIn ? <Navigate to='/contacts' /> :<RegisterForm /> }
        </>
    )
}
export default RegisterPage