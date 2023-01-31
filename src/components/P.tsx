import {FC, ReactNode} from 'react';

interface PProps{
    children: ReactNode
}

export const P: FC<PProps> = ({children}) => {
    return (
        <p className={"text-xl mt-5"}>
            {children}
        </p>
    );
}
