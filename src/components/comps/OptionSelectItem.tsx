import React, { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Badge,

} from "@chakra-ui/react";

// const CONTRACT_ADDRESS = AppContract.networks["1"].address;

// console.log("CONTRACT_ADDRESS", CONTRACT_ADDRESS);


import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';
import { HStack, VStack } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { Switch } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';

function OptionSelectItem(props) {
  return (
    <>
      <Flex >
        <Text>{props.text}</Text>
        <Spacer width={"50px"} />
        {console.log(props.votingResult)}
        { 
          props.votingResult !== null ? 
          <Badge colorScheme={"red"} borderWidth={"1px"} borderRadius={"5px"} borderColor={"red"}>{props.votingResult / 100.00}%</Badge>
          : <></>
        }
      </Flex>
    </>

  );
}

export default OptionSelectItem;
