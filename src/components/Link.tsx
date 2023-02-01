import { FC, ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  download?: string;
  target?: "_blank";
}

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a
      className={
        "relative inline-block text-xl hover:text-white duration-200 before:block before:absolute before:-inset-x-0.5 before:bottom-0 before:bg-indigo-500 before:h-1.5 hover:before:h-full hover:before:bottom-0 before:duration-200 cursor-pointer hover:duration-400"
      }
      {...props}
    >
      <span className={"relative"}>{children}</span>
    </a>
  );
};
