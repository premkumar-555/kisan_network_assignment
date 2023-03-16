import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
const ContactInfo = () => {
  const { selectedContact } = useSelector((state) => state);
  const { state } = useLocation();
  console.log(selectedContact);
  return (
    <Box
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      borderRadius="lg"
      w={["100%", "75%", "45%"]}
      mx="auto"
      border="1px solid lightgrey"
      p="1.5rem"
    >
      <Text
        sx={{
          textDecoration: "underline solid orange",
          textUnderlineOffset: "0.25rem",
        }}
        mb="2.5rem"
        fontWeight="500"
        fontSize="xl"
      >
        Contact-info
      </Text>
      <Box
        w="100%"
        display="flex"
        border="1px solid none"
        mb="1rem"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Text
          fontWeight="500"
          color="grey"
          textAlign="right"
          w={["25%", "50%"]}
          fontSize={["md", "lg"]}
          textAlign="right"
        >
          Name &nbsp;:
        </Text>
        <Text fontWeight="500" w={["75%", "50%"]} fontSize={["md", "lg"]}>
          &nbsp; {`${state?.first_name}${state?.last_name}`}
        </Text>
      </Box>
      <Box
        w="100%"
        display="flex"
        border="1px solid none"
        justifyContent="space-evenly"
        alignItems="center"
        mb="2.5rem"
      >
        <Text
          fontWeight="500"
          color="grey"
          textAlign={["left", "right"]}
          w="50%"
          fontSize={["md", "lg"]}
        >
          Phone Number &nbsp;:
        </Text>
        <Text fontWeight="500" w="50%" fontSize={["md", "lg"]}>
          &nbsp; {`${state?.phone_number}`}
        </Text>
      </Box>
      <Link to={"/new-message/"} state={state}>
        <Button borderRadius="lg" colorScheme="orange" size={["md", "lg"]}>
          {" "}
          Send Message
        </Button>
      </Link>
    </Box>
  );
};

export default ContactInfo;
