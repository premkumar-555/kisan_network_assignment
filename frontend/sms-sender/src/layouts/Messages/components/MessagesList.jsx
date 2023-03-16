import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import "./style.css";
const MessagesList = () => {
  return (
    <TableContainer
      border="1px solid lightgrey"
      borderRadius="lg"
      p="1rem"
      py="0"
      pr="1rem"
      mx="auto"
      id="style-7"
      h="400px"
      overflowY="scroll"
      position="relative"
      w={["100%", "95%", "75%"]}
    >
      <Table variant="striped" colorScheme="orange">
        <Thead>
          <Tr>
            <Th
              className="tRow"
              textTransform="capitalize"
              fontSize={["sm", "md", "md"]}
            >
              Contact Name
            </Th>
            <Th
              className="tRow"
              textTransform="capitalize"
              fontSize={["sm", "md", "md"]}
            >
              Time Of SMS
            </Th>
            <Th
              className="tRow"
              textTransform="capitalize"
              fontSize={["sm", "md", "md"]}
            >
              OTP Sent
            </Th>
          </Tr>
        </Thead>
        <Tbody className="tBody">
          <Tr fontSize={["sm", "md"]} textTransform="capitalize">
            <Td className="tRow tdLeft">millimetres (mm)</Td>
            <Td className="tRow ">millimetres (mm)</Td>
            <Td className="tRow tdRight">millimetres (mm)</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MessagesList;
