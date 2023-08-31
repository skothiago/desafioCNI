import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box bg="gray.100">
          <App />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
