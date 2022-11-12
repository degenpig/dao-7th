const Web3 = require("web3");
const AppContract = require("./src/assets/abi.json");

const CONTRACT_ADDRESS = "0x80c265244b42d2152247d795133f7F2038686D67";
const ACCOUNT = "";
const BASE_URL = "";

const senTransaction = async () => {
  try {
    const web3 = new Web3(process.env.INFURA_RINKEBY_URL);
    const chainId = await web3.eth.net.getId();
    const contract = new web3.eth.Contract(AppContract, CONTRACT_ADDRESS);
    const tx = contract.methods.setBaseURL(BASE_URL);
    const gas = await tx.estimateGas({ from: ACCOUNT });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(ACCOUNT);
    const signedTransaction = await web3.eth.accounts.signTransaction(
      {
        to: CONTRACT_ADDRESS, //contract.options.address
        data,
        gas,
        gasPrice,
        nonce,
        chainId,
      },
      process.env.RINKEBY_PRIVATE_KEY
    );
    console.log({ nonce, gas, gasPrice, data }, signedTransaction);
    console.log(`Initial BaseURL: ${await contract.methods._baseURL().call()}`);
    const receipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );
    console.log(
      `Updated BaseURL: ${await contract.methods._baseURL().call()}. TX Hash ${
        receipt.transactionHash
      }`
    );
  } catch (error) {
    console.log(error);
  }
};

senTransaction();
