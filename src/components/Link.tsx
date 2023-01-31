import {FC, ReactNode} from 'react';

interface LinkProps{
    href: string
    children: ReactNode
}

export const Link: FC<LinkProps> = ({href, children}) => {
    return (
        <a
            className={"relative inline-block text-xl hover:text-white before:block before:absolute before:-inset-x-0.5 before:bottom-0 before:bg-indigo-500 before:h-1.5 hover:before:h-full hover:before:bottom-0 before:duration-200 cursor-pointer"}
            href={href}
        >
            <span className={"relative"}>{children}</span>
        </a>
    );
}
