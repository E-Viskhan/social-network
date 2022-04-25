import * as yup from "yup";
import { useFormik } from "formik";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import s from "./Account.module.sass";
import { str2bool } from "../../../assets/helpers";

const AccountForm = ({ fullName, lookingJob, lookingJobDesc }) => {
    const validationSchema = yup.object({
        fullName: yup.string().required('FullName field can`t be empty'),
        lookingJob: yup.boolean(),
        lookingJobDesc: yup.string().when('lookingJob',
            { is: true, then: yup.string().required('You need write description for your a looking job') })
    });
    const initialValues = { fullName, lookingJob, lookingJobDesc };

    const onSubmit = values => {
        console.log(values)
    };

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    const handleRadio = e => {
        const { setFieldValue } = formik;
        const value = str2bool(e.target.value);

        setFieldValue('lookingJob', value);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                className={s.formField}
                fullWidth
                id='fullName'
                name='fullName'
                label='Your fullName'
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <FormControl className={s.formField}>
                <FormLabel id="lookingJob">Looking for a Job</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="lookingJob"
                    name="lookingJob"
                    value={formik.values.lookingJob}
                    onChange={handleRadio}
                >
                    <FormControlLabel value='true' control={<Radio/>} label="Yes"/>
                    <FormControlLabel value='false' control={<Radio/>} label="No"/>
                </RadioGroup>
            </FormControl>
            <TextField
                className={s.formField}
                fullWidth
                multiline
                id='lookingJobDesc'
                name='lookingJobDesc'
                label='Description a Job'
                disabled={!formik.values.lookingJob}
                value={formik.values.lookingJobDesc}
                onChange={formik.handleChange}
                error={formik.touched.lookingJobDesc && Boolean(formik.errors.lookingJobDesc)}
                helperText={formik.touched.lookingJobDesc && formik.errors.lookingJobDesc}
            />
            <Button disabled={!formik.dirty || !formik.isValid} color="primary" variant="contained" fullWidth type="submit">Save</Button>
        </form>
    );
};

export default AccountForm;