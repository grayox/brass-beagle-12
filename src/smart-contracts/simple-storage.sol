// https://www.youtube.com/watch?v=OdN10MnU5gs

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