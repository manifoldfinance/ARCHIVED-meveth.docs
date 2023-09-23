# Auth
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/b0e2069a5fc2dbba164002d348bd88f3539a53df/src/libraries/Auth.sol)


## State Variables
### adminsCounter

```solidity
uint8 adminsCounter;
```


### operators

```solidity
mapping(address => bool) public operators;
```


### admins

```solidity
mapping(address => bool) public admins;
```


## Functions
### constructor


```solidity
constructor(address initialAdmin);
```

### onlyAdmin


```solidity
modifier onlyAdmin();
```

### onlyOperator


```solidity
modifier onlyOperator();
```

### addAdmin


```solidity
function addAdmin(address newAdmin) external onlyAdmin;
```

### deleteAdmin


```solidity
function deleteAdmin(address oldAdmin) external onlyAdmin;
```

### addOperator


```solidity
function addOperator(address newOperator) external onlyAdmin;
```

### deleteOperator


```solidity
function deleteOperator(address oldOperator) external onlyAdmin;
```

## Events
### AdminAdded

```solidity
event AdminAdded(address indexed newAdmin);
```

### AdminDeleted

```solidity
event AdminDeleted(address indexed oldAdmin);
```

### OperatorAdded

```solidity
event OperatorAdded(address indexed newOperator);
```

### OperatorDeleted

```solidity
event OperatorDeleted(address indexed oldOperator);
```

## Errors
### Unauthorized

```solidity
error Unauthorized();
```

### AlreadySet

```solidity
error AlreadySet();
```

### NoAdmin

```solidity
error NoAdmin();
```
