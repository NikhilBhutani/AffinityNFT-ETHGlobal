//SPDX-License-Identifier: UNLICENSED

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
    mapping(uint256 => address) approvedTokens;

    constructor() ERC721(tokenName, tokenSymbol) {

    }


    /**
    * @dev Mint Function: Mints 1 tokenId, each time it is going to be incremented by 1
    */

    function mintToken(string memory _tokenURI) public returns (uint256) {
        tokenId.increment();

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

    //function tokenURI here
    function tokenURI(uint256 __tokenId) public override view returns(string memory ){
        require(_exists(__tokenId), "ERC721URIStorage: URI query for nonexistent token");

        string memory baseURI = _baseURI(); // baseURI is just an empty string like ""
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, __tokenId.toString())) : "";
    }

    /**
    * @dev function approve: With this function the owner of the NFT approves another address
    * The new approved address is now able to take control of this NFT as well
     */

    function approve(address _approved, uint256 _tokenId ) override public {
        require(_own(msg.sender, _tokenId), "You need to own this token in order to approve it! ");

        approvedTokens[_tokenId] == _approved; 

        emit Approval(msg.sender, _approved, _tokenId); // We Emit the Approval event here
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
