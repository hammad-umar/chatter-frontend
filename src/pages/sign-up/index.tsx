import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../../components/auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { extractErrorMessage } from "../../utils/errors";
import { useLogin } from "../../hooks/useLogin";

const SignUpPage: FC = () => {
  const { login } = useLogin();
  const [createUser] = useCreateUser();

  const [error, setError] = useState<string>("");

  const onSubmitHandler = async (credentials: {
    email: string;
    password: string;
  }): Promise<void> => {
    const { email, password } = credentials;

    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      await login({ email, password });
      setError("");
    } catch (error) {
      const errMessage = extractErrorMessage(error);

      if (errMessage) {
        setError(errMessage);
        return;
      }

      setError("Unknown error occured.");
    }
  };

  return (
    <Auth error={error} submitLabel="Sign Up" onSubmit={onSubmitHandler}>
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default SignUpPage;
