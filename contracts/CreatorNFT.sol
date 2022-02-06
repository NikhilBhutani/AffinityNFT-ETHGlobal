pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; 

contract CreatorNFT is ERC721URIStorage, Ownable{
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    using Strings for uint256;
    
   string public constant tokenName = "AffinityCreatorToken";
   string public constant tokenSymbol = "ACT";

   Counters.Counter private tokenId;

    mapping(uint256 => address) ownerOfToken;
    mapping(address => string) tokenURIOfOwner;
    
    constructor() ERC721(tokenName, tokenSymbol) {

    }

    function mintToken(string memory _tokenURI) public returns (uint256) {
        tokenId.increment();
        console.log('Token URI ',_tokenURI);
        console.log('Token ID ', tokenId.current());
        uint256 newTokenId = tokenId.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        tokenURIOfOwner[msg.sender] = _tokenURI;
        return newTokenId;
    }

    function getTokenURI(address _user) public view returns (string memory){
        return tokenURIOfOwner[_user];
    }

    function updateTokenURI(string memory _newURI) public {
        tokenURIOfOwner[msg.sender] = _newURI;
    }

    function transfer(address to, uint256 _tokenId) public {
        transferFrom(msg.sender, to, _tokenId);
    }
}
