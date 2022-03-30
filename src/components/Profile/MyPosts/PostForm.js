import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

const PostForm = props => {
    const dispatch = useDispatch();
    const initialValues = { postText: '' };

    const validationSchema = object({
        postText: string()
    });

    const onSubmit = (values, actions) => {
        const { postText } = values;
        dispatch(addPost(postText));
        actions.setSubmitting(false);
        actions.resetForm();
    };

    const formikProps = { initialValues, validationSchema, onSubmit };

    return (
        <Formik {...formikProps}>
            {({ isSubmitting, isValid, dirty }) => (
                <Form>
                    <Field type='text' name='postText'/>
                    <button type='submit' disabled={!dirty || !isValid || isSubmitting}>Add post</button>
                </Form>
            )}
        </Formik>
    );
};

export default PostForm;