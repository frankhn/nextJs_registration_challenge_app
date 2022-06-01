import type { NextPage } from 'next'
import { Button } from 'antd';
import * as Input from '../common/TextInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link'
import { useState } from 'react';
import Router from 'next/router';


const validationSchema = yup.object().shape({
    names: yup.string(),
    email: yup.string().email().required('* required'),
    birthDate: yup.date().required('* required'),
});

const Register: NextPage = () => {
    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit = async () => {
        try {
            Router.push('/home')
        } catch (error: any) {
        }
    };
    const {
        values,
        errors,
        handleChange,
        setFieldValue,
        handleSubmit,
    } = useFormik({
        initialValues: {
            names: '',
            email: '',
            birthDate: undefined,
        },
        validationSchema,
        onSubmit,
    });

    return (
        <div className='md:w-7/12 md:shadow-md md:px-10 md:pb-10 md:rounded-md my-4 bg-white p-4 '>
            <form className="w-full mt-10 md:w-11/12" onSubmit={handleSubmit}>
                <Input.Base
                    placeholder="franklin anthony"
                    label="full names"
                    value={values.names}
                    onChange={handleChange('names')}
                    error={errors.names}
                    autoComplete="names"
                    size="large"
                    className="border-2 rounded p-2"
                />
                <Input.Base
                    placeholder="example@email.com"
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    autoComplete="username"
                    size="large"
                    className="border-2 rounded p-2"
                />
                <div className="flex flex-row flex-wrap justify-between">
                    <div className="w-full md:w-5/12">
                        <Input.Date
                            label="Birth Date"
                            placeholder="select date"
                            picker="date"
                            full
                            value={values.birthDate}
                            onChange={(date) => setFieldValue('birthDate', date)}
                            error={errors.birthDate}
                        />

                    </div>
                </div>
                <Button
                    size="large"
                    className="w-full rounded p-2 bg-slate-800 text-slate-300"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    type="primary"
                    onClick={() => handleSubmit()}
                >
                    Register
                </Button>
            </form>
            <div className="w-full md:w-11/12 flex flex-row items-center font-light text-sm justify-end">
                <p className="link my-4">
                    <Link href="/forgot-password"><a>Forget Password</a></Link>
                </p>
            </div>
        </div>
    )
}

export default Register
