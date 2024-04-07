import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User";

interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

export const useCreateUser = () => {
  return useMutation<{ createUser: User }, CreateUserInput>(
    CREATE_USER_MUTATION
  );
};
