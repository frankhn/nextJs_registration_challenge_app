import React from 'react';
import { DatePicker } from 'antd';
import { PickerDateProps } from 'antd/lib/date-picker/generatePicker';
import { Moment } from 'moment';
import { DATE_FORMAT } from '../../../constants';

interface Props extends PickerDateProps<Moment> {
  label: string;
  error?: string | string[];
  full?: boolean;
  dateFormat?: string;
  containerClass?: string;
}

export const DateInput: React.FC<Props> = ({
  label,
  error,
  full,
  dateFormat = DATE_FORMAT,
  ...rest
}) => {
  return (
    <div className={`my-2 ${rest.containerClass}`}>
      <span className="text-plain font-light">{label}</span>
      <DatePicker
        {...rest}
        className={`my-1 w-full ${rest.className}`}
        format={dateFormat}
      />
      {error && <span className="text-xs text-red-600 ">{error}</span>}
    </div>
  );
};

export default DateInput;
