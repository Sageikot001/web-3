require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3UJ34rMxpIpBiLMskJDkR0S_jN38N6LU',
      accounts: ['7642c104dd7af8aa7d7a62929698a8236b4125be9a01f7fc05bbf75fd8992f54']
    }
  }
};
