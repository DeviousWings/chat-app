import React from "react";
import { MessageContext, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  // eslint-disable-next-line no-unused-vars
  const { handleOpenThread, message } = useMessageContext();

  return (
    <MessageContext
      message={{ ...message, user: {} }}
      // handleOpenThread={}
    />
  );
};

export default TeamMessage;
