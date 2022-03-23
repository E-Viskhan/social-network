import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = props => {
    if (props.isAuth) return <Navigate to='/profile'/>

    return (
    <>
        <h1>Login</h1>
        <LoginForm login={props.login}/>
    </>
)};

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login })(Login);