import { FC } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import { EXCLUDED_ROUTES } from "../../constants";

interface GuardProps {
  children: JSX.Element;
}

const Guard: FC<GuardProps> = ({ children }) => {
  const { data: user } = useGetMe();

  return (
    <>
      {EXCLUDED_ROUTES.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default Guard;
