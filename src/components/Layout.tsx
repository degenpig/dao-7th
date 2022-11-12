import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

export default function LandingLayout(props: any) {
  return (
    <Flex direction="column" align="center" {...props} position="relative">
      {/* <Header /> */}
      {props.children}
    </Flex>
  );
}
