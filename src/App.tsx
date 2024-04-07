import { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import router from "./routes";
import Guard from "./components/guard";
import client from "./utils/apollo-client";
import { darkTheme } from "./utils/theme";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
