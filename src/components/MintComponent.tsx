import Proposal from "./comps/Proposal";
import OptionEditItem from "./comps/OptionEditItem";

import React, { useContext } from "react";
import { injected } from "../ethereum/connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../ethereum/hooks";
import firebase from "../lib/firebase";

import useStepper from "use-stepper";
import web3 from "../ethereum/web3";
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
  Editable,
} from "@chakra-ui/react";

import AppContract from "../assets/abi.json";
import { ContractContext } from "../context/contract";
import { useAuth } from "../context/AuthUserContext";

import Nft1 from '../images/1.gif';
import Nft2 from '../images/2.gif';
import Nft3 from '../images/3.gif';

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
import { CLIENT_RENEG_WINDOW } from "tls";

const min = 1;
const defaultValue = 1;
const max = 12;

enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};
function MintComponent() {
  const [supply, setTotalSupply] = React.useState([]);
  const [minted, setMinted] = React.useState(0);

  const [proposalData, setProposalData] = React.useState([]);

  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  const [instance, setInstance] = React.useState<any>(null);
  const [accounts, setAccounts] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [hidden, setHidden] = React.useState(true);
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const { authUser, loading, signOut } = useAuth();
  // const router = useRouter();
  // Listen for changes on loading and authUser, redirect if needed
  React.useEffect(() => {
    !loading && authUser ? setHidden(false) : setHidden(true);
  }, [authUser, loading]);

  React.useEffect(() => {
    if (instance) {
      const getSupply = async () => {
        const totalSupply = await instance.methods.myTotalSupply().call();
        setTotalSupply(totalSupply);
      };
      getSupply();


      const getRes = async () => {
        const ed = await instance.methods.mintedAlready().call({ from: account })
        setMinted(ed);
      };
      getRes();
    }
  }, [instance]);

  React.useEffect(() => {
    const init = async () => {
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      const instance = new web3.eth.Contract(
        // @ts-ignore
        AppContract,
        ///// "0xd704109149cF35aa3c19F41FAd32066b736f7764"
        "0x9329f6bbc923675B6CBc54C85BC38DCb8457Fd16"
      );

      let proposals = await instance.methods.viewProposals().call();

      if (proposals && proposals.length > 0) {
        setProposalData(proposals);
      }

      setAccounts(accounts);
      setInstance(instance);
    };

    init();
  }, []);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  const currentConnector = connectorsByName["Injected"];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  function validValueClosestTo(desiredNumericValue) {
    return String(Math.min(max, Math.max(desiredNumericValue, min)));
  }

  function integerReducer(state, action) {
    const integerValue = parseInt(state.value, 10);
    switch (action.type) {
      case useStepper.actionTypes.increment: {
        return { value: validValueClosestTo(integerValue + 1) };
      }
      case useStepper.actionTypes.decrement: {
        return { value: validValueClosestTo(integerValue - 1) };
      }
      case useStepper.actionTypes.coerce: {
        if (Number.isNaN(integerValue)) {
          return { value: String(defaultValue) };
        }
        const newValue = validValueClosestTo(integerValue);
        if (newValue !== state.value) {
          return { value: newValue };
        }
        return state;
      }
      default:
        return useStepper.defaultReducer(state, action);
    }
  }

  const mint = async (category) => {
    try {
      if (!instance) throw new Error(`No Ethereum Instance.`);

      if (!account)
        throw new Error(`No account selected. Try reauthenticating`);
      const amount = (0.069 * (count as any)).toFixed(3);
      
      const value = web3.utils.toWei(amount, "ether");

      const myvalue = (category) => {
        switch (true) {
          case category == 3:
            ///// return web3.utils.toWei("1", "ether");
            return web3.utils.toWei("330", "ether");
          case category == 2:
            ///// return web3.utils.toWei("2", "ether");
            return web3.utils.toWei("660", "ether");
          case category == 1:
            ///// return web3.utils.toWei("3", "ether");
            return web3.utils.toWei("3300", "ether");
        }
      };

      const gasfee = (category) => {
        switch (true) {
          case category == 3:
            return "3000000";
          case category == 2:
            return "3000000";
          case category == 1:
            return "3000000";
        }
      };

      const isOwner = await instance.methods.isOwner().call({
        from: account,
      });

      console.log(isOwner + "++++++++++++++++++++++++++++++++++++++++++++++++");

      if(isOwner){
        await instance.methods.mintOwner(category).send({
          from: account,
          gas: gasfee(category),
        });
      }else{
        await instance.methods.mint(category).send({
          from: account,
          value: myvalue(category),
          gas: gasfee(category),
        });
      }

      const getSupply = async () => {
        const totalSupply = await instance.methods.myTotalSupply().call();
        setTotalSupply(totalSupply);
      };
      getSupply();

      const getRes = async () => {
        const ed = await instance.methods.mintedAlready().call({ from: account })
      setMinted(ed);
      };
      getRes();

    } catch (error) {
      console.log(error);
    }
  };

  const connect = async () => {
    try {
      console.log("Connecting", connected);
      // Verify address is in Presales.
      // await
      //Retrieve current nonce.
      // After presales.
      setActivatingConnector(currentConnector);
      activate(connectorsByName["Injected"]);

      const getSupply = async () => {
        const totalSupply = await instance.methods.myTotalSupply().call();
        setTotalSupply(totalSupply);
      };
      getSupply();

      const getRes = async () => {
        const ed = await instance.methods.mintedAlready().call({ from: account })
      setMinted(ed);
      };
      getRes();

    } catch (error) {
      console.log(error, "Error");
    }
  };

  const contract = useContext(ContractContext);

  React.useEffect(() => {
    console.log("Contract", contract);


  }, [contract]);

  const { isOpen, onOpen, onClose } = useDisclosure();/////
  const [value, setValue] = React.useState('0');/////

  const [propindex, setPropindex] = React.useState(0);
  const [proptitle, setProptitle] = React.useState("");
  const [propcontent, setPropcontent] = React.useState("");
  const [options, setOptions] = React.useState(["I don't care.", "Yes, I agree.", "No, I don't agree."]);
  const [propopened, setPropopened] = React.useState(true);

  const addOption = () => {
    setOptions(options => [...options, ""]);

  }

  const openProposal = async () => {
    try {

      if (!instance) throw new Error(`No Proposal Instance.`);

      if (!account)
        throw new Error(`No account selected. Try reauthenticating`);

      await instance.methods.openProposalPublic(
        proptitle,
        propcontent,
        options,
        propopened
      ).send({ from: account, gas: 1000000 })

      let proposals = await instance.methods.viewProposals().call();

      if (proposals && proposals.length > 0) {
        setProposalData(proposals);
      }

    } catch (error) {
      console.log(error);
    }
  };



  const onVoteConfirm = async (value, index) => {
    try {

      if (!instance) throw new Error(`No Proposal Instance.`);

      if (!account)
        throw new Error(`No account selected. Try reauthenticating`);
      await instance.methods.vote(
        index,
        value
      ).send({ from: account, gas: 1000000 })

      let proposals = await instance.methods.viewProposals().call();

      if (proposals && proposals.length > 0) {
        setProposalData(proposals);
      }

    } catch (error) {
      console.log(error);
    }
  };


  const closeProposal = async (index) => {
    try {
      if (!instance) throw new Error(`No Proposal Instance.`);
      if (!account)
        throw new Error(`No account selected. Try reauthenticating`);
        
      await instance.methods.closeProposal(
        index
      ).send({ from: account, gas: 1000000 });
      
      /* await instance.methods.calc_result(
        index
      ).send({ from: account, gas: 1000000 }); */

      let proposals = await instance.methods.viewProposals().call();
      if (proposals && proposals.length > 0) {
        setProposalData(proposals);
      }

      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex width="100%" mt={10} justifyContent="center" alignItems="center">
      <Stack width="100%" align="center">
        <Stack
          width={{ base: "100%", md: "120%" }}
          direction={{ base: "column", md: "column" }}
          textAlign="center"
          align="center"
        >
          <section id="roadmap2" className="relative">
            <div id="featureblocks_flex" className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              <div className="featureblocks_container" >
                <div className="featureblocks_buttoncontainer">
                  <a className="featureblocks_button1 " href="#0"  >Learn more ...</a>
                </div>
                <img className="featureblocks_nft" src={Nft1} width="400" height="400" alt="Hero" />
                <h4 className="featureblocks_button">NFT #1 : $500</h4>

                <div className="featureblocks_mintsupply">
                  <p id="bronze_state" className="nft_state">{supply[3]}/50</p>
                </div>
                
                <div id="bronze_mint" className="mint_hide">
                  
                  {minted == 0 && active && (
                    <Button
                      size={"lg"}
                      fontWeight={"normal"}
                      borderRadius="20px"
                      fontSize="16px"
                      background="white"
                      color="blue"
                      onClick={() => mint(3)}
                      border="blue solid 1px"
                      marginTop={'10px'}
                    >
                      Mint this
                    </Button>
                  )}
                </div>

              </div>
              <div className="featureblocks_container">
                <div className="featureblocks_buttoncontainer">
                  <a className="featureblocks_button1 " href="#0"  >Learn more ...</a>
                </div>
                <img className="featureblocks_nft" src={Nft2} width="400" height="400" alt="Hero" />
                <h4 className="featureblocks_button">NFT #2 : $1000</h4>

                <div className="featureblocks_mintsupply">
                  <p id="silver_state" className="nft_state">{supply[2]}/50</p>
                </div>

                <div id="silver_NFT_mint" className="featureblocks_mintbtn">
                
                  <div id="silver_mint" className="mint_hide">
                    
                    {minted == 0 && active && (
                      <Button
                        size={"lg"}
                        fontWeight={"normal"}
                        borderRadius="20px"
                        fontSize="16px"
                        background="white"
                        color="blue"
                        onClick={() => mint(2)}
                        border="blue solid 1px"
                      >
                        Mint this
                      </Button>
                    )}
                  </div>

                </div>
              </div>
              <div className="featureblocks_container">
                <div className="featureblocks_buttoncontainer">
                  <a className="featureblocks_button1 " href="#0"  >Learn more ...</a>
                </div>
                <img className="featureblocks_nft" src={Nft3} width="400" height="400" alt="Hero" />
                <h4 className="featureblocks_button">NFT #3 : $5000</h4>

                <div className="featureblocks_mintsupply">
                  <p id="gold_state" className="nft_state">{supply[1]}/11</p>
                </div>

                <div id="gold_NFT_mint" className="featureblocks_mintbtn">

                  <div id="gold_mint" className="mint_hide">
                    
                    {minted == 0 && active && (
                      <Button
                        size={"lg"}
                        fontWeight={"normal"}
                        borderRadius="20px"
                        fontSize="16px"
                        background="white"
                        color="blue"
                        onClick={() => mint(1)}
                        border="blue solid 1px"
                      >
                        Mint this
                      </Button>
                    )}
                  </div>

                </div>
              </div>
            </div>
            <div>
            {!connected && (
                      <Button
                        size={"lg"}
                        fontWeight={"normal"}
                        borderRadius="20px"
                        fontSize="16px"
                        background="white"
                        color="blue"
                        onClick={connect}
                        border="blue solid 1px"
                      >
                        Connect Wallet
                      </Button>
                    )}
            </div>
          </section>
          <section >
            <Tabs>
              <TabList>
                <Tab>All Proposals</Tab>
                <Tab>Create New Proposal</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>

                  {
                    proposalData.map(
                      (proposalItem, index) => {
                        return <Proposal
                          onVoteConfirm={(value)=> {onVoteConfirm(value, index)}}
                          key={index}
                          proposalItem={proposalItem}
                          closeProposal={closeProposal}
                        />
                      }
                    )
                  }

                </TabPanel>
                <TabPanel>
                  <Box borderWidth={"1px"} padding={"20px"} marginTop={"10px"} borderRadius={"10px"} width={"1000px"} borderColor={"black"}>
                    <Text fontSize='xl' textAlign={"left"} marginTop={"30px"}>Title</Text>
                    <Input placeholder='Invest to new item.'

                      onChange={(event) => { setProptitle(event.target.value) }}
                    />
                    <Text fontSize='xl' textAlign={"left"} marginTop={"30px"} >Content</Text>
                    <Textarea placeholder='There is new item in market.'
                      onChange={(event) => { setPropcontent(event.target.value) }}
                    />
                    <Flex marginTop={"30px"}>
                      <Text fontSize='xl'>Options</Text>
                      <Spacer />
                      <IconButton id="currentlyDisplayNone" aria-label='Search database' icon={<AddIcon />} onClick={(e) => { addOption() }} />
                    </Flex>
                    <OrderedList>
                      {
                        options.map((option, index) => {
                          return <ListItem marginTop={"10px"}>
                            <OptionEditItem 
                              optiontext={option}
                              id={index}
                              updateOptionText={(id, value) => {
                                let newOptions = [...options];
                                newOptions[id] = value;
                                setOptions(newOptions);
                              }}
                              removeOption={(id) => {
                                setOptions(options.filter((option, sub_index) => id !== sub_index));
                              }}
                            />
                          </ListItem>
                        })
                      }
                    </OrderedList>
                    <Divider marginTop={"30px"} />
                    <Flex marginTop={"30px"}>
                      <Button colorScheme='blue' onClick={openProposal}>Open Proposal</Button>
                      <Spacer />
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </section>
        </Stack>
      </Stack>
    </Flex>
  );
}

var category = 0;

function selectBronze() {
  var x = document.getElementById("select_bronze");
  if (x.innerHTML == 'Unselect') {
    x.innerHTML = 'Select';

    var a = document.getElementById("select_gold");
    var b = document.getElementById("select_silver");
    a.className = "select_btn";
    b.className = "select_btn";

    var c = document.getElementById("bronze_mint");
    c.className = "mint_hide";

    category = 0;
  } else {
    x.innerHTML = 'Unselect';

    var a = document.getElementById("select_gold");
    var b = document.getElementById("select_silver");
    a.className += "_hide";
    b.className += "_hide";

    var c = document.getElementById("bronze_mint");
    c.className += "_show";

    category = 3;
  }
}

function selectSilver() {
  var x = document.getElementById("select_silver");
  if (x.innerHTML === 'Unselect') {
    x.innerHTML = 'Select';

    var a = document.getElementById("select_gold");
    var b = document.getElementById("select_bronze");
    a.className = "select_btn";
    b.className = "select_btn";

    var c = document.getElementById("silver_mint");
    c.className = "mint_hide";

    category = 0;

  } else {
    x.innerHTML = 'Unselect';

    var a = document.getElementById("select_gold");
    var b = document.getElementById("select_bronze");
    a.className += "_hide";
    b.className += "_hide";


    var c = document.getElementById("silver_mint");
    c.className += "_show";

    category = 2;
  }
}

function selectGold() {
  var x = document.getElementById("select_gold");
  if (x.innerHTML == 'Unselect') {
    x.innerHTML = 'Select';

    var a = document.getElementById("select_silver");
    var b = document.getElementById("select_bronze");
    a.className = "select_btn";
    b.className = "select_btn";

    var c = document.getElementById("gold_mint");
    c.className = "mint_hide";

    category = 0;

  } else {
    x.innerHTML = 'Unselect';

    var a = document.getElementById("select_silver");
    var b = document.getElementById("select_bronze");
    a.className += "_hide";
    b.className += "_hide";

    var c = document.getElementById("gold_mint");
    c.className += "_show";

    category = 1;
  }
}


export default MintComponent;
