// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractErrorMessage = (err: any): string | undefined => {
  const errorMessage = err.graphQLErrors[0]?.extensions?.originalError?.message;

  if (!errorMessage) {
    return;
  }

  if (Array.isArray(errorMessage)) {
    return formatErrorMessage(errorMessage[0]);
  } else {
    return formatErrorMessage(errorMessage);
  }
};

const formatErrorMessage = (errMessage: string): string => {
  return errMessage.charAt(0).toUpperCase() + errMessage.slice(1);
};
