import React from 'react';
import { Input } from 'antd';
import { Props } from './Base';

export const PasswordInput: React.FC<Props> = ({
  label,
  error,
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <div className={`my-2 ${rest.containerClass}`}>
      <span className="text-plain font-light">{label}</span>
      <Input.Password {...rest} className={`my-1 ${rest.className}`} />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default PasswordInput;
