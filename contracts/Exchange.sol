//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Exchange is ERC20 {
    address public tokenAddress;
    address public factoryAddress;

    constructor(address _token) ERC20("AffinityLP", "ALP") {
        require(_token != address(0), "invalid token address");

        tokenAddress = _token;
        factoryAddress = msg.sender;
    }

    function addLiquidity(uint256 _tokenAmount)
        public
        payable
        returns (uint256)
    {
        if (getReserve() == 0) {
            IERC20 token = IERC20(tokenAddress);
            token.transferFrom(msg.sender, address(this), _tokenAmount);

            uint256 liquidity = address(this).balance;
            _mint(msg.sender, liquidity);

            return liquidity;
        } else {
            uint256 maticReserve = address(this).balance - msg.value;
            uint256 tokenReserve = getReserve();
            uint256 tokenAmount = (msg.value * tokenReserve) / maticReserve;
            require(_tokenAmount >= tokenAmount, "insufficient token amount");

            IERC20 token = IERC20(tokenAddress);
            token.transferFrom(msg.sender, address(this), tokenAmount);

            uint256 liquidity = (msg.value * totalSupply()) / maticReserve;
            _mint(msg.sender, liquidity);

            return liquidity;
        }
    }

    function removeLiquidity(uint256 _amount)
        public
        returns (uint256, uint256)
    {
        require(_amount > 0, "invalid amount");

        uint256 maticAmount = (address(this).balance * _amount) / totalSupply();
        uint256 tokenAmount = (getReserve() * _amount) / totalSupply();

        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(maticAmount);
        IERC20(tokenAddress).transfer(msg.sender, tokenAmount);

        return (maticAmount, tokenAmount);
    }

    function getReserve() public view returns (uint256) {
        return IERC20(tokenAddress).balanceOf(address(this));
    }

    function getTokenAmount(uint256 _maticSold) public view returns (uint256) {
        require(_maticSold > 0, "ethSold is too small");

        uint256 tokenReserve = getReserve();

        return getAmount(_maticSold, address(this).balance, tokenReserve);
    }

    function getMaticAmount(uint256 _tokenSold) public view returns (uint256) {
        require(_tokenSold > 0, "tokenSold is too small");

        uint256 tokenReserve = getReserve();

        return getAmount(_tokenSold, tokenReserve, address(this).balance);
    }

    function maticToToken(uint256 _minTokens, address recipient) private {
        uint256 tokenReserve = getReserve();
        uint256 tokensBought = getAmount(
            msg.value,
            address(this).balance - msg.value,
            tokenReserve
        );

        require(tokensBought >= _minTokens, "insufficient output amount");

        IERC20(tokenAddress).transfer(recipient, tokensBought);
    }

    function maticToTokenTransfer(uint256 _minTokens, address _recipient)
        public
        payable
    {
        maticToToken(_minTokens, _recipient);
    }

    function maticToTokenSwap(uint256 _minTokens) public payable {
        maticToToken(_minTokens, msg.sender);
    }

    function tokenToMaticSwap(uint256 _tokensSold, uint256 _minMatic) public {
        uint256 tokenReserve = getReserve();
        uint256 maticBought = getAmount(
            _tokensSold,
            tokenReserve,
            address(this).balance
        );

        require(maticBought >= _minMatic, "insufficient output amount");

        IERC20(tokenAddress).transferFrom(
            msg.sender,
            address(this),
            _tokensSold
        );
        payable(msg.sender).transfer(maticBought);
    }

    function getAmount(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) private pure returns (uint256) {
        require(inputReserve > 0 && outputReserve > 0, "invalid reserves");

        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = inputAmountWithFee * outputReserve;
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;

        return numerator / denominator;
    }
}