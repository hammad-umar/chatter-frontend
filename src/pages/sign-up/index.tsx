import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../../components/auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { extractErrorMessage } from "../../utils/errors";

const SignUpPage: FC = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState<string>("");

  return (
    <Auth
      error={error}
      submitLabel="Sign Up"
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });

          setError("");
        } catch (error) {
          const errMessage = extractErrorMessage(error);

          if (errMessage) {
            setError(errMessage);
            return;
          }

          setError("Unknown error occured.");
        }
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default SignUpPage;
