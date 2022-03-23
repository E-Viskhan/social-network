import {object, string} from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from "./Login.module.css";
import TextError from "./TextError";

const LoginForm = props => {
    const initialValues = { email: '', password: '', rememberMe: false };

    const onSubmit = (values, actions) => {
        const { email, password, rememberMe } = values;
        const { login } = props;

        login(email, password, rememberMe);
        actions.setSubmitting(false);
        actions.resetForm();
    };

    const validationSchema = object({
        email: string().required('This field is required').email('Invalid email format'),
        password: string().required('This field is required')
    });

    const formikProps = { initialValues, validationSchema, onSubmit };

    return (
        <Formik {...formikProps}>
            {({ isSubmitting,  isValid }) => (
                <Form className={s.form}>
                    <ErrorMessage name='email' component={TextError}/>
                    <Field name='email' type="text" placeholder="Email" className={s.email}/>

                    <ErrorMessage name='password' component={TextError}/>
                    <Field name='password' type="password" placeholder="Password" className={s.password}/>

                    <div className={s.rememberContainer}>
                        <Field name='rememberMe' type="checkbox" id="rememberMe" className={s.rememberCheckbox}/>
                        <label htmlFor="rememberMe" className={s.rememberText}>remember me</label>
                    </div>

                    <button type='submit' className={s.submitBtn} disabled={!isValid || isSubmitting}>Login</button>
                </Form>
            )}
        </Formik>
    )
};

export default LoginForm;