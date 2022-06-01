import type { NextPage } from 'next'
import { Button } from 'antd';
import * as Input from '../common/TextInput';
import { IUnknownObject } from '../../../types';
import { useMutation, useQuery } from 'react-query';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';
import http from '../../helpers/axios';
import { useState } from 'react';
import Router from 'next/router';


const validationSchema = yup.object().shape({
    email: yup.string().email().required('* required'),
    password: yup.string().required('* required'),
});

const Register: NextPage = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const mutation = useMutation((data: IUnknownObject) =>
        http.get(`/users/${data.email}`)
    );
    const onSubmit = async () => {
        setSubmitting(true);
        try {
            const payload: IUnknownObject = { email: values.email };
            const { data }: IUnknownObject = await mutation.mutateAsync(payload);
            await localStorage.setItem('token', data?.email);
            setSubmitting(false);
            Router.push('/home')
        } catch (error: any) {
            setErrors({ password: error.message });
            setSubmitting(false);
        }
    };

    const { values, handleChange, errors, handleSubmit, setErrors } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit,
    });

    return (
        <div className='md:w-4/12 md:shadow-md md:px-10 md:pb-10 md:rounded-md my-4 bg-white p-4 '>
            <form className="w-full mt-10 md:w-11/12" onSubmit={handleSubmit}>
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
                <Input.Password
                    placeholder="12345"
                    label="Password"
                    value={values.email}
                    onChange={handleChange('password')}
                    error={errors.password}
                    autoComplete="password"
                    size="large"
                    className="border-2 rounded p-2"
                />
                </div>
                </div>
                <Button
                    size="large"
                    className="w-full rounded p-2 bg-slate-800 text-slate-300"
                    loading={isSubmitting}
                    type="primary"
                    onClick={() => handleSubmit()}
                >
                    Login
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
