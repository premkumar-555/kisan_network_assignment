import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, Button } from "@chakra-ui/react";
const ContactInfo = () => {
  const { selectedContact } = useSelector((state) => state);
  console.log(selectedContact);
  return (
    <Box
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      display="flex"
      justifyContect="center"
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
        justifyContect="space-evenly"
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
          &nbsp; {`${selectedContact?.first_name}${selectedContact?.last_name}`}
        </Text>
      </Box>
      <Box
        w="100%"
        display="flex"
        border="1px solid none"
        justifyContect="space-evenly"
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
          &nbsp; {`${selectedContact?.phone_number}`}
        </Text>
      </Box>
      <Button borderRadius="lg" colorScheme="orange" size={["md", "md"]}>
        Send Message
      </Button>
    </Box>
  );
};

export default ContactInfo;
