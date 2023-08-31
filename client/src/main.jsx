import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ChakraProvider>
        <Box bg="gray.100">
          <App />
        </Box>
      </ChakraProvider>
  </React.StrictMode>
);
