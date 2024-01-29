import { useDispatch } from 'react-redux'
import css from './LoginForm.module.css'
import { loginThunk } from '../../redux/auth/authOperations';
export const LoginForm = () => {
  const dispatch = useDispatch();


  function handelLogin(evt) {    
    evt.preventDefault()
    const userLoginObj = {
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value
    }
      dispatch(loginThunk(userLoginObj))  
    evt.target.reset()
  }

    return (
      <>
        <div className={css.container}>
          <div className={css.heading}>Log in</div>
          <form className={css.form} onSubmit={handelLogin}>                    
            <div className={css.inputField}>
              <input
                required=""
                autoComplete="off"
                type="email"
                name="email"
                id="email"
              />
              <label htmlFor="email">Email</label>
            </div>
          <div className={css.inputField}>
              <input
                required=""
                autoComplete="off"
                type="password"
                name="password"
                id="password"
              />
              <label htmlFor="username">Password</label>
          </div>
          <div className={css.btnContainer}>
            <button className={css.btn}>Log in</button>      
          </div>
          </form>
        </div>
      </>
           
        
    )
}