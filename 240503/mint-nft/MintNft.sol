// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintNft is ERC721Enumerable{

    mapping(uint=>string) metadataUri;

    constructor() ERC721("Yang","yang") {}

    function mintNft(string memory _metadataUri) public {
        uint tokenId= totalSupply()+1;
        _mint(msg.sender, tokenId);

        metadataUri[tokenId] = _metadataUri;
    }

    function tokenURI(uint _tokenId) public override view returns(string memory){
        return metadataUri[_tokenId];
    }
}