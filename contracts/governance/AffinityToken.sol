// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract AffinityToken is ERC20, ERC20Burnable, AccessControl, ERC20Permit, ERC20Votes {

    
    // event MaticReceived(address owner, uint256 value);
    // event TokenSent(address to, uint256 value);
    // event TransferRateUpdated(uint256 oldRate, uint256 newRate);
    // event OwnershipTransfered(address oldOwner, address newOwner);

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string public tokenName = "Affinity Token";
    string public tokenSymbol = "AFT";
    uint256 _totalSupply = 1000000000 ether;

    constructor() ERC20(tokenName, tokenSymbol) ERC20Permit(tokenName) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        mint(msg.sender, _totalSupply);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    // function transfer(address _to, uint256 _amount) public {

    // }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}
