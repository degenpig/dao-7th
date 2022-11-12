
import OptionSelectItem from "./OptionSelectItem";
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


const Proposal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();/////
  const [value, setValue] = React.useState('0');/////
  const [stateProposal, setStateProposal] = React.useState(props.proposalItem.opened ? "opened" : "closed");
  // const [votingResult, setVotingResult] = React.useState([]);
  
  const closeProposal = () => {
    setStateProposal("pending");
    props.closeProposal(props.proposalItem.index);
  }

  React.useEffect(() => {
    setStateProposal(props.proposalItem.opened ? "opened" : "closed");
  }, [props.proposalItem]);

  return (
    <>
      <Box onClick={onOpen} borderWidth={"1px"} padding={"20px"} marginTop={"10px"} borderRadius={"10px"} width={"1000px"} borderColor={"black"}>
        <Flex >
          <Text fontSize='2xl'>{props.proposalItem.title}</Text>
          <Spacer />
          <Switch id='email-alerts' isDisabled={true} />
        </Flex>
        <Divider />
        <Text fontSize='sm' >{props.proposalItem.content}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>
            <Flex marginTop={"30px"}>
              <Text fontSize='xl' >{props.proposalItem.title}</Text>
              <Spacer />
              {/* <Switch id='openclose-alerts' /> */}
              {
                stateProposal == "opened" ?
                  <Button colorScheme='teal' variant='solid' onClick={closeProposal}>
                    Close Proposal
                  </Button> :
                  stateProposal == "pending" ?
                    <Button
                      isLoading
                      loadingText='Calculating'
                      colorScheme='teal'
                      variant='outline'
                    >
                      Calculating
                    </Button> :
                    <Button colorScheme='pink' variant='solid' isDisabled>
                      Proposal has been Closed
                    </Button>
              }
            </Flex>
          </ModalHeader>
          <Divider borderColor={"black"} />
          <ModalBody >
            <Text fontSize='sm' >{props.proposalItem.content}</Text>
            <RadioGroup onChange={setValue} value={value} fontSize={"40px"} name="options">
              <Stack direction='column' marginTop={"30px"}>
                {/* <Radio value="0">
                  <OptionSelectItem text={"I don't care"} votingResult={props.votingResult.length > 0 ? props.votingResult[0].result && props.votingResult[0].result.length>0 ? props.votingResult[0].result[0] : null : null} />
                </Radio> */}
                {
                  props.proposalItem.options.map((option, index) => {
                    return <Radio value={(index).toString()}>
                      {/* <OptionSelectItem text={option} votingResult={props.votingResult.length > 0 ? props.votingResult[0].result && props.votingResult[0].result.length>0 ? props.votingResult[0].result[index+1] : null : null} /> */}
                      <OptionSelectItem text={option} votingResult={props.proposalItem.opened == false ? props.proposalItem.result[index] : null} />
                    </Radio>
                  })
                }
              </Stack>
            </RadioGroup>
          </ModalBody>
          <Divider borderColor={"black"} />
          <ModalFooter>
            {
              props.proposalItem.opened ?
                <>
                  <Button colorScheme='blue' mr={3} onClick={(e) => {
                    props.onVoteConfirm(value);
                    onClose();
                  }
                  }>Confirm</Button>
                  <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </> :
                <Button variant='ghost' onClick={onClose}>Close</Button>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Proposal;
