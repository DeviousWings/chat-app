import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";
import { StreamChat } from "stream-chat";

const client = StreamChat.getInstance("ctsnt5c5abav");
// you can still use new StreamChat("api_key");

await client.connectUser(
  {
    id: "jlahey",
    name: "Jim Lahey",
    image: "https://i.imgur.com/fR9Jz14.png",
  },
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGVsaWNhdGUtY2xvdWQtMSJ9.4QZ97-5kOsToni22FFrEvYCpt8HgtkuMxPOLWhsr87s"
);

const Clients = props => {
  const { id, name, image_url, content } = props.client;

  return (
    <div>
      <Link to={`/b/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div>
        <Truncate
          lines={5}
          ellipsis={
            <span>
              ...<Link to={`/b/${id}`}>Read more</Link>
            </span>
          }>
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};
