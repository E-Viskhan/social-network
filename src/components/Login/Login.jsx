import s from './Login.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {object, string} from 'yup';

const LoginForm = props => {
    const initialValues = {email: '', password: '', rememberMe: false};

    const onSubmit = values => {

    };

    const validationSchema = object({
        email: string().required('This field is required').email('Invalid email format'),
        password: string().required('This field is required')
    });

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className={s.form}>
                <ErrorMessage name='email'/>
                <Field name='email' type="text" placeholder="Email" required/>
                <ErrorMessage name='password'/>
                <Field name='password' type="text" placeholder="Password" required/>
                <div className={s.rememberContainer}>
                    <Field name='rememberMe' type="checkbox" id="rememberMe" className={s.rememberCheckbox}/>
                    <label htmlFor="rememberMe" className={s.rememberText}>remember me</label>
                </div>
                <button type='submit' className={s.submitBtn}>Login</button>
            </Form>
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