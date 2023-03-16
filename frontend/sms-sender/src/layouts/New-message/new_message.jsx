import React from "react";
import { useLocation } from "react-router-dom";
const NewMessage = () => {
  const { state } = useLocation();
  console.log("state got ", state);
  return <div>NewMessage</div>;
};

export default NewMessage;
