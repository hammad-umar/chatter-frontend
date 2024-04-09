import { FC, ReactNode, useEffect, useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../../hooks/useGetMe";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: ReactNode;
  error?: string;
}

const Auth: FC<AuthProps> = ({ submitLabel, onSubmit, children, error }) => {
  const { data } = useGetMe();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "75%",
          md: "35%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={!!error}
        helperText={error}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
