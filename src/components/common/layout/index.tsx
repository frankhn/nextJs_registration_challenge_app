import { } from 'react';

interface Props {
    children: React.ReactNode;
}

export const CustomLayout: React.FC<Props> = ({ children }) => {
    return <div className='flex justify-center content-center'>
        {children}
    </div>
};
