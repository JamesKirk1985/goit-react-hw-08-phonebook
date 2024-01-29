import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { Header } from "components/Header/Header"

const HomePage = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
        <>
            {isLoggedIn ? <Navigate to='/contacts' /> : <Header />} 
            <Outlet/>
        </>
    )
}
export default HomePage