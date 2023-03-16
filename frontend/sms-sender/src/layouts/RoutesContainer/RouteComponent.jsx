import React from "react";
import Contacts from "../Contacts/Contacts";
import Messages from "../Messages/messages";
import NavBar from "../NavBar/NavBar";
import ContactInfo from "../Contact-info/contact-info";
import NewMessage from "../New-message/new_message";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="messages" element={<Messages />} />
      <Route path="contact-info/:id" element={<ContactInfo />} />
      <Route path="new-message" element={<NewMessage />} />
    </Routes>
  );
};

export default RouteComponent;
