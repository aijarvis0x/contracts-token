import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();
const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.18" }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  networks: {
    monadTestnet: {
      url: "https://testnet-rpc.monad.xyz",
      accounts: process.env.TESTNET_PRIVATE_KEY
        ? [process.env.TESTNET_PRIVATE_KEY]
        : [],
      chainId: 10143
    }
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com/"
  },
  etherscan: {
    enabled: false,
  },
};

export default config;
