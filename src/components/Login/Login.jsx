import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = props => {
    const isAuth = useSelector(state => state.auth.isAuth);

    if (isAuth) return <Navigate to='/profile'/>

    return (
        <>
            <h1>Login</h1>
            <LoginForm/>
        </>
    )
};

export default Login;