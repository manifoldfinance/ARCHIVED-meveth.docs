# BuilderApi

All URIs are relative to _http://localhost:18550_

| Method | HTTP request | Description |
| --- | --- | --- |
| [**getValidators**](BuilderApi.md#getValidators) | **GET** /relay/v1/builder/validators | Get a list of validator registrations for validators scheduled to propose in the current and next epoch. |
| [**submitBlock**](BuilderApi.md#submitBlock) | **POST** /relay/v1/builder/blocks | Submit a new block to the relay. |

<a name="getValidators"></a>

# **getValidators**

> List getValidators()

Get a list of validator registrations for validators scheduled to propose in the current and next epoch.

    * Used by builders to know when to submit bids for an upcoming proposal.  * Returns an array of validator registrations for the current and next epoch.  * Each entry includes a slot and the validator with assigned duty.  * Slots without a registered validator are omitted.

### Parameters

This endpoint does not need any parameter.

### Return type

[**List**](../Models/ValidatorsResponseEntry.md)

### Authorization

No authorization required

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

<a name="submitBlock"></a>

# **submitBlock**

> submitBlock(submitBlock_request, cancellations)

Submit a new block to the relay.

    * Blocks can be submitted as JSON or SSZ, and optionally GZIP encoded. To be   clear, there are four options: JSON, JSON+GZIP, SSZ, SSZ+GZIP. If JSON, the   content type should be &#x60;application/json&#x60;. If SSZ, the content type should   be &#x60;application/octet-stream&#x60;.  * The relay will simulate the block to verify properties and proposer   payment in the payment transaction from builder to proposer   &#x60;fee_recipient&#x60; at the end of block.  * For accountability, builder signature is over the SSZ encoded &#x60;message&#x60;.  * The &#x60;message&#x60;, which does not include the transactions, will be made   public via the data API, allowing anyone to verify the builder signature.  * Any new submission by a builder will overwrite a previous one by the same   &#x60;builder_pubkey&#x60;, even if it is less profitable.

### Parameters

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **submitBlock_request** | [**submitBlock_request**](../Models/submitBlock_request.md) | A signed bid with an execution payload. |  |
| **cancellations** | **String** | If set to 1, opt into bid cancellations. | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

-   **Content-Type**: application/json, application/octet-stream
-   **Accept**: application/json
