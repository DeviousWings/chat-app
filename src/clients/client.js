import React, { Component } from "react";
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

export default class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "jlahey",
      name: "Jim Lahey",
      image: "https://i.imgur.com/fR9Jz14.png",
    };
  }
  render() {
    return <div></div>;
  }
}
