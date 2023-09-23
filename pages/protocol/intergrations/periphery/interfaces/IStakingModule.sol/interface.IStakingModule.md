# IStakingModule
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/b0e2069a5fc2dbba164002d348bd88f3539a53df/src/interfaces/IStakingModule.sol)


## Functions
### deposit


```solidity
function deposit(ValidatorData calldata data, bytes32 latestDepositRoot) external payable;
```

### validators


```solidity
function validators() external view returns (uint256);
```

### mevEth


```solidity
function mevEth() external view returns (address);
```

### VALIDATOR_DEPOSIT_SIZE


```solidity
function VALIDATOR_DEPOSIT_SIZE() external view returns (uint256);
```

### payRewards


```solidity
function payRewards(uint256 rewards) external;
```

### payValidatorWithdraw


```solidity
function payValidatorWithdraw() external;
```

### recoverToken


```solidity
function recoverToken(address token, address recipient, uint256 amount) external;
```

### record


```solidity
function record() external returns (uint128, uint128, uint128, uint128);
```

### registerExit


```solidity
function registerExit() external;
```

### batchMigrate


```solidity
function batchMigrate(IStakingModule.ValidatorData[] calldata batchData) external;
```

## Structs
### ValidatorData
*Structure for passing information about the validator deposit data.*


```solidity
struct ValidatorData {
    address operator;
    bytes pubkey;
    bytes32 withdrawal_credentials;
    bytes signature;
    bytes32 deposit_data_root;
}
```

