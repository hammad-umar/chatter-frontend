import { FC } from "react";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../../components/auth";
import { useLogin } from "../../hooks/useLogin";

const LoginPage: FC = () => {
  const { login, error } = useLogin();

  return (
    <Auth
      error={error ? "Credentials are not valid." : ""}
      submitLabel="Login"
      onSubmit={(request) => login(request)}
    >
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
};

export default LoginPage;
