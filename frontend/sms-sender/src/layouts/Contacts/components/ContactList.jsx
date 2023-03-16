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
    <Box
      px={["0.25rem", "0.5rem0", "1rem", "2rem"]}
      border="1px solid lightgrey"
      borderRadius="lg"
      w={["100%", "95%", "75%"]}
      mx="auto"
    >
      <Table w="100%" zIndex="2">
        <Tbody>
          <Tr fontSize={["md", "md", "lg"]} textTransform="capitalize">
            <Td fontWeight="500" textAlign="center" className="tRow tdLeft">
              Sl. No
            </Td>
            <Td fontWeight="500" textAlign="center" className="tRow tdRight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <TableContainer
        pr="1rem"
        id="style-7"
        h="400px"
        overflowY="scroll"
        position="relative"
        w="100%"
      >
        <Table variant="striped" colorScheme="orange">
          <Tbody className="tBody">
            <Tr fontSize={["sm", "md"]} textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
            <Tr textTransform="capitalize">
              <Td textAlign="center" className="tRow tdLeft">
                inches
              </Td>
              <Td textAlign="center" className="tRow tdRight">
                millimetres (mm)
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContactList;
