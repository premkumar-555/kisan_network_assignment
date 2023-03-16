import React from "react";
import {
  Text,
  Box,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <Box
      w={["100%", "95%", "75%"]}
      mb="15px"
      mx="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="500" fontSize={["md", "lg"]}>
        Contacts-List
      </Text>
      <InputGroup w={["50%", "35%", "30%"]}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
        />
        <Input
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          sx={{
            "&:focus": {
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              border: "1px solid lightgrey",
            },
          }}
          fontSize={["sm", "md"]}
          fontWeight="450"
          type="tel"
          placeholder="Search Contact"
        />
      </InputGroup>
    </Box>
  );
};

export default Header;
