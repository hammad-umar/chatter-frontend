import { useState } from "react";
import { BACKEND_API_URL } from "../constants";
import client from "../utils/apollo-client";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<string>("");

  const login = async (request: LoginRequest): Promise<void> => {
    const res = await fetch(`${BACKEND_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      if (res.status === 401) {
        setError("Credentials are not valid.");
      } else {
        setError("Unknown error occured.");
      }
      return;
    }

    setError("");
    await client.refetchQueries({ include: "active" });
  };

  return { error, login };
};
