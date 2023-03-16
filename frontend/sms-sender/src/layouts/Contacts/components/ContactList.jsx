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
const ContactList = () => {
  return (
    <TableContainer
      border="1px solid lightgrey"
      borderRadius="lg"
      p="1rem"
      py="0"
      pr="1rem"
      id="style-7"
      h="425px"
      overflowY="scroll"
      mx="auto"
      position="relative"
      w={["100%", "95%", "75%"]}
    >
      <Table variant="striped" colorScheme="orange">
        <Thead>
          <Tr>
            <Th
              textAlign="center"
              className="tRow"
              textTransform="capitalize"
              fontSize={["sm", "md", "md"]}
            >
              Serial No.
            </Th>
            <Th
              textAlign="center"
              className="tRow"
              textTransform="capitalize"
              fontSize={["sm", "md", "md"]}
            >
              Contact Name
            </Th>
          </Tr>
        </Thead>
        <Tbody className="tBody">
          <Tr fontSize={["sm", "md"]} textTransform="capitalize">
            <Td textAlign="center" className="tRow tdLeft">
              Serial No.
            </Td>
            <Td textAlign="center" className="tRow tdRight">
              millimetres (mm)
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
