//SPDX License Identifier: MIT

pragma solidity ^0.8.0;

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

    constructor() ERC721(tokenName, tokenSymbol) {
        //tokenId.increment();
        //_mint(msg.sender, tokenId.current());
        //tokenOwner[msg.sender] = tokenId.current();
    }

    function mintToken(string memory tokenURI) public returns (uint256) {
        tokenId.increment();

        uint256 newTokenId = tokenId.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        return newTokenId;
    }

    function ownerOf(uint256 _tokenId)  override public view onlyOwner returns  (address){
        return ownerOfToken[_tokenId];
    }

    function transfer(address to) public {
        transferFrom(msg.sender, to, tokenOwner[msg.sender]);
        ownerOfToken[tokenId.current()] = to;
        tokenOwner[to] = tokenId.current();
    }

    // get function tokenURI here
    function tokenURI(uint256 __tokenId) public override view returns(string memory ){
        require(_exists(__tokenId), "ERC721URIStorage: URI query for nonexistent token");

        string memory baseURI = _baseURI(); // baseURI is just an empty string like ""
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, __tokenId.toString())) : "";
    }

    // We want all tokenURI for the frontend to display to the User, should we include the mapping?

    // If we want to add _safeMint instead of _mint we will need to onERC721 Received as data?
    // There are 2 types of this function ins the ERC721 file

    // Do we need the approve function here?


}
