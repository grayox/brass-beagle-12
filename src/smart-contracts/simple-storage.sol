// https://www.youtube.com/watch?v=OdN10MnU5gs
// https://ropsten.etherscan.io/tx/0x0c6fff0a2916b239487c952b3c000732c9c50b37848740031654346279874456

pragma solidity ^0.4.2;

contract SimpleStorage {
    string public storedData;
  
    constructor(string initialValue) public {
        storedData = initialValue;
    }
  
    function set(string x) public {
        storedData = x;
    }
  
    function get() public constant returns(string retVal) {
        return storedData;
    }
}