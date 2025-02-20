// SPDX-License-Identifier: BUSL-1.1

pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AIJarvis is ERC20 {
    address private owner;
    uint8 private _decimals;

    constructor(uint8 decimals_) ERC20("AI Jarvis", "JAI") {
        _decimals = decimals_;
        owner = msg.sender;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    // @dev mint tokens to an account
    // @param account the account to mint to
    // @param amount the amount of tokens to mint
    function mint(address account, uint256 amount) external {
        require(msg.sender == owner, "only owner can mint");
        _mint(account, amount);
    }

    // @dev burn tokens from an account
    // @param account the account to burn tokens for
    // @param amount the amount of tokens to burn
    function burn(address account, uint256 amount) external {
        require(msg.sender == owner, "only owner can burn");
        _burn(account, amount);
    }
}
