import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Button, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";

const NewMessage = () => {
  const { state } = useLocation();
  const [OTP, setOTP] = useState(123456);
  const toast = useToast();
  const [text, settext] = useState("Hi your OTP is : ******");
  const [loading, setloading] = useState(false);
  const sendMessage = async () => {
    setloading(true);
    try {
      let result = await axios.post(
        `${import.meta.env.VITE_REACT_API}/messages`,
        {
          phone_number: state?.phone_number,
          text: text,
          contact: state?._id,
          OTP: OTP,
        }
      );
      if (result.status === 200) {
        toast({
          title: "SMS Sent Successfully!",
          position: "top",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
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
  const generateOtp = () => {
    let minm = 100000;
    let maxm = 999999;
    let res = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    if (`${res}`.length === 6) {
      setOTP(res);
      settext(`Hi your OTP is : ${res}`);
    }
    console.log("res ", OTP);
  };
  useEffect(() => {
    generateOtp();
  }, []);

  return (
    <Box
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      mx="auto"
      w={["100%", "75%", "40%"]}
      display="flex"
      flexDir="column"
      p="1rem"
      alignItems="center"
      border="1px solid lightgrey"
      borderRadius="lg"
    >
      <Text
        textDecoration="underline solid orange"
        textUnderlineOffset="0.25rem"
        fontWeight="500"
        fontSize={("md", "lg", "xl")}
        mb="1.5rem"
      >
        New Message
      </Text>
      <Textarea
        mb="1.5rem"
        value={text}
        isReadOnly={true}
        placeholder="Here is a sample placeholder"
        size="sm"
        bg="whitesmoke"
        fontWeight="450"
        fontSize={("sm", "md", "md")}
      />
      <Button
        isLoading={loading}
        onClick={sendMessage}
        borderRadius="lg"
        colorScheme="orange"
        size={["md", "lg"]}
      >
        Send SMS
      </Button>
    </Box>
  );
};

export default NewMessage;
