// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface AggregatorInterface {
    function latestAnswer() external view returns (int256);

    function latestTimestamp() external view returns (uint256);

    function latestRound() external view returns (uint256);

    function getAnswer(uint256 roundId) external view returns (int256);

    function getTimestamp(uint256 roundId) external view returns (uint256);

    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);

    event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);
}

contract DummyOracle is AggregatorInterface {
    address private _owner;
    mapping (uint256 => int256) _prices;
    uint256 private _latestRound = 1;

    constructor(int256 price) {
        _prices[_latestRound] = price;
        _owner = msg.sender;
    }

    function latestAnswer() external view override returns (int256) {
        return _prices[_latestRound];
    }

    function latestTimestamp() external view override returns (uint256) {
        return block.timestamp;
    }

    function latestRound() external view override returns (uint256) {
        return _latestRound;
    }

    function getAnswer(uint256 roundId) external view override returns (int256) {
        return _prices[roundId];
    }

    function getTimestamp(uint256 roundId) external view override returns (uint256) {
        return block.timestamp;
    }

    function setPrice(int256 price) external {
        require(msg.sender == _owner, "Caller is not the owner");
        _prices[_latestRound] = price;
    }
}