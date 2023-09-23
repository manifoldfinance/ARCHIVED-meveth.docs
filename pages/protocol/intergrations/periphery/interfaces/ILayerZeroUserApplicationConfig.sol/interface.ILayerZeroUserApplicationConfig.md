# ILayerZeroUserApplicationConfig
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/b0e2069a5fc2dbba164002d348bd88f3539a53df/src/interfaces/ILayerZeroUserApplicationConfig.sol)


## Functions
### setConfig


```solidity
function setConfig(uint16 _version, uint16 _chainId, uint256 _configType, bytes calldata _config) external;
```

### setSendVersion


```solidity
function setSendVersion(uint16 _version) external;
```

### setReceiveVersion


```solidity
function setReceiveVersion(uint16 _version) external;
```

### forceResumeReceive


```solidity
function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external;
```

