import {Formik, Form, Field} from "formik";
import {object, string} from "yup";
import {ArrowRight} from "react-feather";
import React from "react";
import s from './MessageForm.module.css';

const MessageForm = props => {
    const initialValues = {messageText: ''};

    const validationSchema = object({
        messageText: string().required('Please enter your message')
    });

    const onSubmit = (values, actions) => {
        const { messageText } = values;
        const { addMessage } = props;

        addMessage(messageText);
        actions.setSubmitting(false);
        actions.resetForm();
    };

    const formikProps = { initialValues, validationSchema, onSubmit };

    return (
        <Formik {...formikProps}>
            {({ isSubmitting, isValid, dirty }) => (
                <Form className={s.form}>
                    <Field type='text' name='messageText' placeholder='Start typing...'/>
                    <button type='submit' disabled={!dirty || isSubmitting || !isValid}><ArrowRight/></button>
                </Form>
            )}
        </Formik>
    );
};

export default MessageForm;