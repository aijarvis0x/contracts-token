// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JarvisModule = buildModule("JarvisModule", (m) => {
    const jv = m.contract("AIJarvis", [6]);
    return { jv };
});

module.exports = JarvisModule;