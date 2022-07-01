// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/tests/MockV3Aggregator.sol";

contract AppleMock is MockV3Aggregator {
    constructor() public MockV3Aggregator(8, 200000000000) {}
}
