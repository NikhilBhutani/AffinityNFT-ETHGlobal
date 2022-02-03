//SPDX License Identifier: MIT

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

contract RewardNFT is ERC721, Ownable {

   using SafeMath for uint256;

   string public constant tokenName = "RewardToken";
   string public constant tokenSymbol = "RT";

    address private owner;
    uint256 tokenId;

    mapping(uint256 => address) ownerOfToken;
    mapping(address => uint256) balance;

    

    constructor() ERC721(tokenName, tokenSymbol) public {
        owner = msg.sender;
        _mint(owner, tokenId);
        balance[msg.sender] += 10;
        transferFrom(address(this), msg.sender, tokenId);
    }

    function balanceOf(address _owner) override public view returns (uint256){
        return balance[_owner];
    }

    function transfer(address to, uint256 amount) public {
        require(msg.sender == owner, "Only the creator can send RewardNFT's from this contract");
        transferFrom(msg.sender, to, amount);
    }

}