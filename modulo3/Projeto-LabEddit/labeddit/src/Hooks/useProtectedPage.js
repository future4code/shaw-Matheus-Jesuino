import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../Routes/Coordinator";

const useProtectedPage = () => {
    const navigate =useNavigate()
    useEffect(()=>{
        const token  = localStorage.getItem('token')
if (!token){
    goToLogin(navigate)
}
    },[navigate])
}
export default useProtectedPage