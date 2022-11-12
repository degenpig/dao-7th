import * as React from "react";
import { createContext, useEffect } from "react";
import AppContract from "../output/ProCamelRiders.json";

import { injected } from "../ethereum/connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../ethereum/hooks";

import useStepper from "use-stepper";
import web3 from "../ethereum/web3";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = AppContract.networks["4"].address;

console.log("CONTRACT_ADDRESS", CONTRACT_ADDRESS);

const min = 1;
const defaultValue = 1;
const max = 20;

enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

export const ContractContext = createContext<any>(undefined);

const contractAddress: Record<number, string> = {
  1: "0x850F436e04a2762f7C179E2D1a84E1Fd9735Cd50",
  3: "0x0BD9E23AA7bCE0Fe062684544CA88530Df566532",
  4: "0xfa1ff35dedc9B145107b3c463c7210063f3391C3",
  5777: "",
  ///// 80001: "0xd704109149cF35aa3c19F41FAd32066b736f7764"
  137: "0x9329f6bbc923675B6CBc54C85BC38DCb8457Fd16"
};

export const ContractProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [supply, setTotalSupply] = React.useState(0);

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

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  React.useEffect(() => {
    if (instance) {
      const getSupply = async () => {
        const totalSupply = await instance.methods.totalSupply().call();
        console.log("Total supply", totalSupply);
        setTotalSupply(totalSupply);
      };

      getSupply();
    }
  }, [instance]);

  React.useEffect(() => {
    const init = async () => {
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      const instance = new web3.eth.Contract(
        // @ts-ignore
        AppContract.abi,
        CONTRACT_ADDRESS
      );

      setAccounts(accounts);

      setInstance(instance);
    };

    init();
  }, [active]);

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

  const mint = async () => {
    try {
      if (!instance) {
        console.log("No instance");
        return;
      }
      if (!accounts.length)
        throw new Error(`No account selected. Try reauthenticating`);
      const amount = (0.03 * (count as any)).toFixed(2);
      const value = web3.utils.toWei(amount, "ether");
      const gas = (count) => {
        switch (true) {
          case Number(count) > 1 && Number(count) <= 3:
            return "250000";
          case Number(count) > 3 && Number(count) <= 6:
            return "450000";
          case Number(count) > 6 && Number(count) <= 9:
            return "600000";
          case Number(count) > 6 && Number(count) <= 9:
            return "600000";
          case Number(count) > 9 && Number(count) <= 12:
            return "750000";
          case Number(count) > 12 && Number(count) <= 15:
            return "850000";
          case Number(count) > 15:
            return "950000";
        }
      };
      await instance.methods.mint(count).send({
        from: accounts[0],
        gas: gas(count),
        value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connect = async () => {
    try {
      console.log("Connecting", connected);
      setActivatingConnector(currentConnector);
      activate(connectorsByName["Injected"]);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  const [contract, setContract] = React.useState<any>();

  useEffect(() => {
    if (active && !contract && library && chainId) {
      setContract(
        new ethers.Contract(contractAddress[chainId], AppContract.abi, library)
      );
    }
  }, [active]);

  return (
    <ContractContext.Provider value={instance}>
      {children}
    </ContractContext.Provider>
  );
};
