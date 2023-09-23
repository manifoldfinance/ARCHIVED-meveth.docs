# IMevEthShareVault
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/b0e2069a5fc2dbba164002d348bd88f3539a53df/src/interfaces/IMevEthShareVault.sol)


## Functions
### payRewards


```solidity
function payRewards() external;
```

### fees


```solidity
function fees() external view returns (uint128);
```

### rewards


```solidity
function rewards() external view returns (uint128);
```

### logRewards


```solidity
function logRewards(uint128 protocolFeesOwed) external;
```

### recoverToken


```solidity
function recoverToken(address token, address recipient, uint256 amount) external;
```

### sendFees


```solidity
function sendFees() external;
```

### setProtocolFeeTo


```solidity
function setProtocolFeeTo(address newFeeTo) external;
```

### setNewMevEth


```solidity
function setNewMevEth(address newMevEth) external;
```

