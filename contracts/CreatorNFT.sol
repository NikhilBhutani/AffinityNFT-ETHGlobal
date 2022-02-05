//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; 



contract CreatorNFT is Ownable, ERC721URIStorage{

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    using Strings for uint256;
    

   string public constant tokenName = "CreatorToken";
   string public constant tokenSymbol = "CT";

   Counters.Counter private tokenId;

    mapping(uint256 => address) ownerOfToken;
    mapping(address => uint256) tokenOwner;
    mapping(uint256 => string) private tokenURIs;
    mapping(uint256 => address) approvedTokens;

    constructor() ERC721(tokenName, tokenSymbol) {

    }


    /**
    * @dev Mint Function: Mints 1 tokenId, each time it is going to be incremented by 1
    */

    function mintToken(string memory _tokenURI) public returns (uint256) {
        tokenId.increment();
        console.log('Token URI ',_tokenURI);
        console.log('Token ID ', tokenId.current());
        uint256 newTokenId = tokenId.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
         
        return newTokenId;
    }

    function ownerOf(uint256 _tokenId)  override public view returns  (address){
        return ownerOfToken[_tokenId];
    }

    function transfer(address to, uint256 _tokenId) public {
        transferFrom(msg.sender, to, _tokenId);
    }

}
