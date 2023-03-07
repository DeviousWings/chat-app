import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import { StreamChat } from "stream-chat";

export default class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      image_url: "",
      content: "",
    };
  }
}
