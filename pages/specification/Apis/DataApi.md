# DataApi

All URIs are relative to _http://localhost:18550_

| Method | HTTP request | Description |
| --- | --- | --- |
| [**getDeliveredPayloads**](DataApi.md#getDeliveredPayloads) | **GET** /relay/v1/data/bidtraces/proposer_payload_delivered | Get payloads that were delivered to proposers. |
| [**getReceivedBids**](DataApi.md#getReceivedBids) | **GET** /relay/v1/data/bidtraces/builder_blocks_received | Get builder bid submissions. |
| [**getValidatorRegistration**](DataApi.md#getValidatorRegistration) | **GET** /relay/v1/data/validator_registration | Check that a validator is registered with the relay. |

<a name="getDeliveredPayloads"></a>

# **getDeliveredPayloads**

> List getDeliveredPayloads(slot, cursor, limit, block_hash, block_number, proposer_pubkey, builder_pubkey, order_by)

Get payloads that were delivered to proposers.

    * Payloads become available after the relay responds to a &#x60;getPayload&#x60; request from the proposer.  * Query arguments are used as filters.

### Parameters

| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| **slot** | **String** | A specific slot. | [optional] [default to null] |
| **cursor** | **String** | A starting slot for multiple results. | [optional] [default to null] |
| **limit** | **String** | The number of results. | [optional] [default to null] |
| **block_hash** | **String** | A specific block hash. | [optional] [default to null] |
| **block_number** | **String** | A specific block number. | [optional] [default to null] |
| **proposer_pubkey** | **String** | A specific proposer public key. | [optional] [default to null] |
| **builder_pubkey** | **String** | A specific builder public key. | [optional] [default to null] |
| **order_by** | [**OrderBy**](../Models/.md) | Sort results in order of... | [optional] [default to null] [enum: -value, value] |

### Return type

[**List**](../Models/BidTraceV2.md)

### Authorization

No authorization required

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

<a name="getReceivedBids"></a>

# **getReceivedBids**

> List getReceivedBids(slot, block_hash, block_number, builder_pubkey, limit)

Get builder bid submissions.

    * Returns a list of builder bids without execution payloads.  * Only submissions that were successfully verified.

### Parameters

| Name               | Type       | Description                    | Notes                        |
| ------------------ | ---------- | ------------------------------ | ---------------------------- |
| **slot**           | **String** | A specific slot.               | [optional] [default to null] |
| **block_hash**     | **String** | A specific block hash.         | [optional] [default to null] |
| **block_number**   | **String** | A specific block number.       | [optional] [default to null] |
| **builder_pubkey** | **String** | A specific builder public key. | [optional] [default to null] |
| **limit**          | **String** | The number of results.         | [optional] [default to null] |

### Return type

[**List**](../Models/BidTraceV2WithTimestamp.md)

### Authorization

No authorization required

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

<a name="getValidatorRegistration"></a>

# **getValidatorRegistration**

> SignedValidatorRegistration getValidatorRegistration(pubkey)

Check that a validator is registered with the relay.

    * Returns the latest validator registration for a given pubkey.  * Useful to check whether your own registration was successful.

### Parameters

| Name       | Type       | Description                     | Notes             |
| ---------- | ---------- | ------------------------------- | ----------------- |
| **pubkey** | **String** | The validator&#39;s public key. | [default to null] |

### Return type

[**SignedValidatorRegistration**](../Models/SignedValidatorRegistration.md)

### Authorization

No authorization required

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
