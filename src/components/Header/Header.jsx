import { Link, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserMenu } from "components/UserMenu/UserMenu"
export const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
        <>
            <p>Phone Book</p>
            
                {!isLoggedIn?(<ul><li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Log In</Link></li></ul>):<UserMenu/>}                    
        </>
    )
}