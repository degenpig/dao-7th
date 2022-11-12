const ProCamelRiders = artifacts.require("ProCamelRiders");

contract("ProCamelRiders", () => {
  it("Should deploy contract", async () => {
    const contract = await ProCamelRiders.deployed();
  });

  it("Should set max supply", async () => {
    const MAX_SUPPLY = 1234; //Fri Oct 09 2020 13:01:44 GMT+0000: Rediculously prior date
    const contract = await ProCamelRiders.deployed();
    await contract.setMaxSupply(MAX_SUPPLY);
    const result = await contract.maxSupply();

    console.log(MAX_SUPPLY, result.toNumber());
  });
});
