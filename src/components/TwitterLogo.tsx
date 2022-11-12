import { Image } from "@chakra-ui/image";
import React from "react";
import twitter from "../assets/twitter.svg";

function TwitterLogo() {
  return (
    <a href="https://twitter.com/ProCamelRiders" target="_blank">
      <Image src={twitter} height="28px" width="136px" />
    </a>
  );
}

export default TwitterLogo;
