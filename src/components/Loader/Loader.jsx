import { Watch } from 'react-loader-spinner'
import css from "./Loader.module.css"
import { useSelector } from 'react-redux'
export const Loader = () => {


    const isLoadingContacts = useSelector(state => state.contacts.isLoading)
    const isLoadingAuth = useSelector(state => state.auth.isLoading)
    
    return (
        <Watch
            height="80"            
            width="80"            
            radius="48"            
            color="grey"            
            ariaLabel="watch-loading"            
            wrapperStyle={{
                position: "absolute",
                top: '50%',
                left: "50%",
                transform: "translate(-50%, -50%)"
                }}            
            wrapperClassName={css.loader}            
            visible={isLoadingContacts||isLoadingAuth}
            
            
            
/>
    )
}
