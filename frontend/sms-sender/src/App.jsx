import { useState } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import RouteComponent from "./layouts/RoutesContainer/RouteComponent";
import NavBar from "./layouts/NavBar/NavBar";
function App() {
  return (
    <Box w="100%" h="100vh" border="1px solid black">
      <NavBar />
      <Box
        sx={{ position: "relative", top: "100px" }}
        w="100%"
        px="4rem"
        maxH="100%"
        border="1px solid red"
      >
        <RouteComponent />
      </Box>
    </Box>
  );
}

export default App;
