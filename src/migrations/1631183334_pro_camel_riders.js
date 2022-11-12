const ProCamelRiders = artifacts.require("ProCamelRiders");

module.exports = async function (deployer) {
  // Use deployer to state migration tasks.
  try {
    await deployer.deploy(ProCamelRiders);
    const contract = await ProCamelRiders.deployed();
    await contract.setBaseURL(
      "https://ipfs.io/ipfs/QmexL4vVa1rHcNkDCz6iepzHG1HmqTJBhEtVRYShvixk16/"
    );
  } catch (error) {}
};
