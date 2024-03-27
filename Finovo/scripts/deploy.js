const EnergyMarket = artifacts.require("EnergyMarket");
const Token = artifacts.require("Token");

module.exports = async function (deployer) {
    await deployer.deploy(EnergyMarket);
    const energyMarketInstance = await EnergyMarket.deployed();
    // Additional deployment steps or configurations
};
