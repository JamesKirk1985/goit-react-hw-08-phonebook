import { useDispatch } from 'react-redux'
import css from './RegisterForm.module.css'
import { signUpThunk } from "../../redux/auth/authOperations"
export const RegisterForm = () => {
  const dispatch = useDispatch()
  function handleSubmit(evt) {
    evt.preventDefault()
    const userDataObj = {
      name: evt.target.elements.name.value,
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value
    }
    dispatch(signUpThunk(userDataObj))    
    evt.target.reset()
  }

    return (
        <>
        <div className={css.container}>
          <div className={css.heading}>Sign up account</div>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.inputField}>
              <input
                required=""
                autoComplete="off"
                type="text"
                name="name"
                id="username"
              />
              <label htmlFor="username">Full Name</label>
            </div>
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
              <button className={css.btn}>Submit</button>
            <div className=''>New here?<span className={css.span}>Create Account</span>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}