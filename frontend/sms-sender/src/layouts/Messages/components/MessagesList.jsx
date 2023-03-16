import React from "react";
import { useState, useEffect } from "react";
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
  useToast,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import "./style.css";
const MessagesList = () => {
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const [messages, setmessages] = useState([]);
  const getMessages = async () => {
    setloading(true);
    try {
      let result = await axios.get(
        `${import.meta.env.VITE_REACT_API}/messages`
      );
      console.log(result?.data);
      result?.data?.length && setmessages([...result?.data]);
    } catch (error) {
      toast({
        title: error.message,
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setloading(false);
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Box>
      {loading ? (
        <Stack w="80%">
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
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
              {messages.map((ele, ind) => (
                <Tr fontSize={["sm", "md"]} textTransform="capitalize">
                  <Td className="tRow tdLeft">{`${ele?.contact?.first_name} ${ele?.contact?.last_name}`}</Td>
                  <Td className="tRow ">
                    {new Date(`${ele?.created_at}`).toLocaleString()}
                  </Td>
                  <Td className="tRow tdRight">{ele?.OTP}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default MessagesList;
