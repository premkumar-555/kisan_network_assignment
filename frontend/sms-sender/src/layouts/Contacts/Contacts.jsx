import React from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
const Contacts = () => {
  return (
    <>
      <Header text={"Contacts-List"} />
      <ContactList />
    </>
  );
};

export default Contacts;
