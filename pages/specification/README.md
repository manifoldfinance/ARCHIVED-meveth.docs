# Documentation for Relay API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:18550*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *BuilderApi* | [**getValidators**](Apis/BuilderApi.md#getvalidators) | **GET** /relay/v1/builder/validators | Get a list of validator registrations for validators scheduled to propose in the current and next epoch.  |
*BuilderApi* | [**submitBlock**](Apis/BuilderApi.md#submitblock) | **POST** /relay/v1/builder/blocks | Submit a new block to the relay. |
| *DataApi* | [**getDeliveredPayloads**](Apis/DataApi.md#getdeliveredpayloads) | **GET** /relay/v1/data/bidtraces/proposer_payload_delivered | Get payloads that were delivered to proposers. |
*DataApi* | [**getReceivedBids**](Apis/DataApi.md#getreceivedbids) | **GET** /relay/v1/data/bidtraces/builder_blocks_received | Get builder bid submissions. |
*DataApi* | [**getValidatorRegistration**](Apis/DataApi.md#getvalidatorregistration) | **GET** /relay/v1/data/validator_registration | Check that a validator is registered with the relay. |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [BidTraceV1](./Models/BidTraceV1.md)
 - [BidTraceV2](./Models/BidTraceV2.md)
 - [BidTraceV2WithTimestamp](./Models/BidTraceV2WithTimestamp.md)
 - [BlobsBundle](./Models/BlobsBundle.md)
 - [BlobsBundleCommon](./Models/BlobsBundleCommon.md)
 - [ErrorMessage](./Models/ErrorMessage.md)
 - [ExecutionPayload](./Models/ExecutionPayload.md)
 - [ExecutionPayloadAndBlobsBundle](./Models/ExecutionPayloadAndBlobsBundle.md)
 - [ExecutionPayloadCommon](./Models/ExecutionPayloadCommon.md)
 - [ExecutionPayloadCommon_1](./Models/ExecutionPayloadCommon_1.md)
 - [ExecutionPayloadCommon_2](./Models/ExecutionPayloadCommon_2.md)
 - [ExecutionPayload_1](./Models/ExecutionPayload_1.md)
 - [ExecutionPayload_2](./Models/ExecutionPayload_2.md)
 - [OrderBy](./Models/OrderBy.md)
 - [SignedValidatorRegistration](./Models/SignedValidatorRegistration.md)
 - [SignedValidatorRegistration_1](./Models/SignedValidatorRegistration_1.md)
 - [SubmitBlockRequest](./Models/SubmitBlockRequest.md)
 - [SubmitBlockRequestCommon](./Models/SubmitBlockRequestCommon.md)
 - [SubmitBlockRequest_1](./Models/SubmitBlockRequest_1.md)
 - [SubmitBlockRequest_2](./Models/SubmitBlockRequest_2.md)
 - [ValidatorRegistration](./Models/ValidatorRegistration.md)
 - [ValidatorRegistration_1](./Models/ValidatorRegistration_1.md)
 - [ValidatorsResponseEntry](./Models/ValidatorsResponseEntry.md)
 - [Withdrawal](./Models/Withdrawal.md)
 - [Withdrawal_1](./Models/Withdrawal_1.md)
 - [getDeliveredPayloads_400_response](./Models/getDeliveredPayloads_400_response.md)
 - [getReceivedBids_400_response](./Models/getReceivedBids_400_response.md)
 - [getValidatorRegistration_400_response](./Models/getValidatorRegistration_400_response.md)
 - [submitBlock_400_response](./Models/submitBlock_400_response.md)
 - [submitBlock_500_response](./Models/submitBlock_500_response.md)
 - [submitBlock_request](./Models/submitBlock_request.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
