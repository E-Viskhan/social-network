import s from './Login.module.css';
import {Formik, Form, Field,} from 'formik';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = props => {
    const initialValues = {email: '', password: '', rememberMe: false};

    const onSubmit = values => {

    };

    const validate = values => {
        const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        let errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegExp.test(values.email)) {
            errors.email = 'Invalid email format';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            {({ errors, touched }) => (
                <Form className={s.form}>
                    {touched.email && errors.email ? <span className={s.error}>{errors.email}</span> : null}
                    <Field name='email' type="text" placeholder="Email" required/>
                    {touched.password && errors.password ? <span className={s.error}>{errors.password}</span> : null}
                    <Field name='password' type="text" placeholder="Password" required/>
                    <div className={s.rememberContainer}>
                        <Field name='rememberMe' type="checkbox" id="rememberMe" className={s.rememberCheckbox}/>
                        <label htmlFor="rememberMe" className={s.rememberText}>remember me</label>
                    </div>
                    <button type='submit' className={s.submitBtn}>Login</button>
                </Form>
            )}
        </Formik>
    )
};

const Login = props => (
    <>
        <h1>Login</h1>
        <LoginForm login={props.login}/>
    </>
);

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {login})(Login);