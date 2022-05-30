import React from 'react';
import { Button, ButtonProps } from 'antd';

export interface BaseButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,

  block,
  loading,
  ...rest
}) => {
  return <Button {...rest}>{children}</Button>;
};

export default BaseButton;
