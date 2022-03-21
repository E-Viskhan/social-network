import {Form, Formik, Field, ErrorMessage} from "formik";
import  {object, string} from "yup";
import TextError from "../../Login/TextError";

const PostForm = props => {
    const { addPost } = props;

    const initialValues = { postText: '' };

    const validationSchema = object({
        postText: string().required('Please enter your message').min(2, 'Your text of post is too short')
    });

    const onSubmit = (values, actions) => {
        const { postText } = values;
        debugger;
        addPost(postText)
        actions.setSubmitting(false);
        actions.resetForm();
    };

    const formikProps = {initialValues, validationSchema, onSubmit};

    return (
        <Formik {...formikProps}>
            {({isSubmitting, isValid, dirty}) => (
                <Form>
                    <Field type='text' name='postText'/>
                    <ErrorMessage name='postText' component={TextError}/>
                    <button type='submit' disabled={!dirty || !isValid || isSubmitting}>Add post</button>
                </Form>
            )}
        </Formik>
    );
};

export default PostForm;