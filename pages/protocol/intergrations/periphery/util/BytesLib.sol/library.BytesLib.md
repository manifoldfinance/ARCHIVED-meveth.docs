# BytesLib
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/b0e2069a5fc2dbba164002d348bd88f3539a53df/src/util/BytesLib.sol)


## Functions
### slice


```solidity
function slice(bytes memory _bytes, uint256 _start, uint256 _length) internal pure returns (bytes memory);
```

### toAddress


```solidity
function toAddress(bytes memory _bytes, uint256 _start) internal pure returns (address);
```

### toUint8


```solidity
function toUint8(bytes memory _bytes, uint256 _start) internal pure returns (uint8);
```

### toUint64


```solidity
function toUint64(bytes memory _bytes, uint256 _start) internal pure returns (uint64);
```

## Errors
### SliceOverflow

```solidity
error SliceOverflow();
```

### OutOfBounds

```solidity
error OutOfBounds();
```
