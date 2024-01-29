// import css from './App.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components/Loader/Loader";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Contacts } from 'Pages/Contacts/Contacts';
import { refreshUserThunk } from '../../redux/auth/authOperations';


const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../../Pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(()=>import('../../Pages/LoginPage/LoginPage'))

export const App = () => { 
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
        dispatch(refreshUserThunk());
  }, [dispatch]);
  
  return (
    <Suspense >
      <Loader/>
      <Routes>        
      <Route path="/" element={ <HomePage />}>      
        <Route path="/register" element={ isLoggedIn?<Navigate to='/contacts' /> : <RegisterPage /> } />
        <Route path="/login" element={ isLoggedIn?<Navigate to='/contacts' /> : <LoginPage/>}/>
        <Route path="/contacts" element={ isLoggedIn?<Contacts /> : <Navigate to='/' />} />
      </Route> 
        
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Suspense>  
    )
    
}
  
