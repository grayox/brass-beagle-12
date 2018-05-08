

// http://ethjs-examples.surge.sh/first-contract.html

contract SimpleStore {

    function set(uint _value) {
        value = _value;
    }
  
    function get() constant returns (uint) {
        return value;
    }
  
    uint value;

}