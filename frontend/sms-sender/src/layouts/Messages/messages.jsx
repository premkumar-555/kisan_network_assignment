import React from "react";
import Header from "../Contacts/components/Header";
import MessagesList from "./components/MessagesList";
const Messages = () => {
  return (
    <>
      <Header text={"Messages-List"} />
      <MessagesList />
    </>
  );
};

export default Messages;
