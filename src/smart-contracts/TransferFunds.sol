pragma solidity ^0.4.22;

contract TransferFunds{

    address public owner;
    constructor() public {
        owner = msg.sender;
    } 

    function transferToOwner() payable public returns (bool) {
        require(msg.value == 1 ether, "Amount should be equal to 1 Ether");
        owner.transfer(1 ether);
        return true;
    }

}