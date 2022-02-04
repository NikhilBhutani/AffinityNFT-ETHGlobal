//SPDX License Identifier: UMLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract RewardNFT is ERC721, Ownable {

   using SafeMath for uint256;

   string public constant tokenName = "RewardToken";
   string public constant tokenSymbol = "RT";

    uint256 tokenId;

    mapping(uint256 => address) ownerOfToken;
    mapping(address => uint256) balance;

    

    constructor() ERC721(tokenName, tokenSymbol){
    }

    function balanceOf(address _owner) override public view returns (uint256){
        return balance[_owner];
    }

    function transfer(address to, uint256 _tokenId) public {
        require(_own(msg.sender, _tokenId), "Only the creator can send RewardNFT's from this contract");
        transferFrom(msg.sender, to, _tokenId);
    }

    /** 
    * @dev Function _own: This function checks the owner of each tokenId,
    * Added this for requirement statements
    */
    function _own(address _claimant, uint256 _tokenId) private view returns(bool){
        require(ownerOfToken[_tokenId] == _claimant);
        return true;
    }

}