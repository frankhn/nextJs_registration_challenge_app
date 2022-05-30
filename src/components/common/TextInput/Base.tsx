import React, { InputHTMLAttributes } from 'react';
import { Input, InputProps } from 'antd';
import { FormikErrors } from 'formik';

export type PropsSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface CustomProps extends InputProps {
  label?: string;
  error?:
    | string
    | string[]
    | undefined;
  prefix?: string | string[] | React.ReactElement | React.ReactElement[] | null;
  suffix?: string | string[] | React.ReactElement | React.ReactElement[] | null;
  containerClass?: string;
}
export interface Props
  extends PropsSpread<InputHTMLAttributes<HTMLInputElement>, CustomProps> {}

export const BaseInput: React.FC<CustomProps> = ({
  label,
  error,
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <div className={`my-2 ${rest.containerClass}`}>
      <span className="text-plain font-light">{label}</span>
      <Input
        {...rest}
        className={`my-1 w-full ${rest.className}`}
        suffix={suffix}
        prefix={prefix}
      />
      {error && <span className="text-xs text-red-600 ">{error}</span>}
    </div>
  );
};

export default BaseInput;
