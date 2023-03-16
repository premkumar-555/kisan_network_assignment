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
import { selectUser } from "../../../Redux/contact-info/actions.js";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useDispatch } from "react-redux";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setloading] = useState(false);

  const getContacts = async () => {
    setloading(true);
    try {
      let result = await axios.get(
        `${import.meta.env.VITE_REACT_API}/contacts`
      );
      result?.data?.length && setContacts([...result?.data]);
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
    getContacts();
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
              {contacts.length >= 1 &&
                contacts.map((ele, ind) => (
                  <Tr
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    onClick={() => {
                      dispatch(selectUser(ele));
                      navigate(`contact-info/${ele?._id}`, {
                        state: { ...ele },
                      });
                    }}
                    key={uuid()}
                    fontSize={["sm", "md"]}
                    textTransform="capitalize"
                  >
                    <Td textAlign="center" className="tRow tdLeft">
                      {ind + 1}
                    </Td>
                    <Td textAlign="center" className="tRow tdRight">
                      {`${ele?.first_name} ${ele?.last_name}`}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ContactList;
