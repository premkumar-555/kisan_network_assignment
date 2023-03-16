import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const hoverEffs = {
  transition: "all 0.2s ease",
  "&:hover": {
    borderBottom: "1px solid white",
    // textUnderlineOffset: "3px",
  },
};
const NavBar = () => {
  return (
    <Box
      h="70px"
      maxW="100%"
      sx={{
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        zIndex: "2",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
      bg="#FF6F00"
      color="white"
      py="1rem"
    >
      {" "}
      <Box
        w={["90%", "85%", "90%"]}
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text
            textDecoration="underline"
            textUnderlineOffset="3px"
            fontWeight="500"
            fontSize={["lg", "xl", "2xl"]}
          >
            <Link to="/">SMS-Sender</Link>
          </Text>
        </Box>
        <Box
          h="100%"
          w={["50%", "32%", "21%"]}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text sx={hoverEffs} fontWeight="500" fontSize={["md", "lg", "xl"]}>
            <Link to="/">Contacts</Link>
          </Text>
          <Text sx={hoverEffs} fontWeight="500" fontSize={["md", "lg", "xl"]}>
            <Link to="messages">Messages</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
