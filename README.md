# Trust OS API

Trust OS is a Decision Verification API.

Trust OS verifies high-impact decisions before execution and returns a verifiable response including a decision ID, recommendation, risk score, risk level, policy reference, proof hash, and latency.

It is designed for financial systems, stablecoin payment flows, AI agents, AML decision traceability, and compliance workflows.

---

## What this does

Most systems execute first and explain later.

Trust OS flips that model:

Verify before execution.

This API allows developers to send a decision context and receive a verification result before the action is executed.

---

## Production API

```txt
https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev
```

---

## Endpoint

```txt
POST /v1/decision/verify
```

---

## Authentication

All requests require an API key.

Pass your API key with the `x-api-key` header.

```txt
x-api-key: YOUR_API_KEY
```

---

## Quick Start

```bash
curl -X POST https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev/v1/decision/verify \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "user_id": "test_user",
    "action": "transfer",
    "amount": 50000,
    "currency": "JPY",
    "destination": "wallet_xyz"
  }'
```

---

## Response Example

```json
{
  "decision_id": "dec_xxx",
  "recommendation": "ALLOW",
  "risk_score": 0.19,
  "risk_level": "LOW",
  "policy": "Payment Approval Policy v1.0",
  "proof_hash": "abc123...",
  "latency_ms": 1
}
```

---

## JavaScript SDK

```bash
npm install trust-os-sdk
```

npm:

https://www.npmjs.com/package/trust-os-sdk

GitHub:

https://github.com/trustos-trustfolio/trustos-sdk

---

## SDK Example

```js
const { TrustOSClient } = require("trust-os-sdk");

const client = new TrustOSClient({
  baseUrl: "https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev",
  apiKey: "YOUR_API_KEY"
});

(async () => {
  const result = await client.verifyDecision({
    user_id: "test_user",
    action: "transfer",
    amount: 50000,
    currency: "JPY",
    destination: "wallet_xyz"
  });

  console.log(result);
})();
```

---

## Use Cases

- Stablecoin payment approval
- AML decision traceability
- AI agent action verification
- Risk-based workflow approval
- Compliance and audit evidence
- Financial decision infrastructure
- Cross-border settlement integrity
- DAO treasury execution guardrails

---

## Notes

- Production API is publicly accessible through API Gateway
- API key is required
- Internal scoring and verification logic are not exposed
- This repository provides a minimal integration pattern
- The API is designed to stay on the pre-execution decision path

---

## Positioning

Trust OS is not post-event monitoring.

Trust OS is a decision verification layer before execution.

---

## Summary

Trust OS provides a simple API pattern:

1. Submit a decision context
2. Verify before execution
3. Receive a verifiable decision response

Built for the era of AI agents, stablecoins, and autonomous financial systems.
