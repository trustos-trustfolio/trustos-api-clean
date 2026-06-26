# Trust OS API

Decision Verification API for high-impact financial operations.

---

# Trust OS

Decision Verification Infrastructure for Financial Operations.

Verify high-impact decisions before execution.

- Website: https://trust-os.io
- Developer Playground: https://demo.trust-os.io
- Financial Operations Demo: https://ops.trust-os.io
- SDK npm: https://www.npmjs.com/package/@trust-os-sdk/trust-os-sdk
- GitHub: https://github.com/trustos-trustfolio

---

## What It Does

Trust OS evaluates high-impact decisions before execution and returns a structured verification result.

- Verify decisions before they execute — not after
- Return a risk level, recommendation, and policy reference for every request
- Generate a cryptographic proof that the decision was evaluated
- Provide measurable latency for each verification event

**Use cases:** payments, stablecoin transfers, treasury disbursements, AI agent actions, compliance workflows

---

## API Endpoint

**Production API:**

```
https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev
```

**Endpoint:**

```
POST /v1/decision/verify
```

---

## Authentication

All requests require an API key passed as a request header:

```
x-api-key: YOUR_API_KEY
```

API keys are provisioned by invitation during private beta. Do not commit keys to source control.

---

## Request Example

```json
{
  "action": "stablecoin_transfer",
  "amount": 50000,
  "currency": "USDC",
  "destination": "wallet_abc",
  "source": "Payment API",
  "priority": "High"
}
```

---

## Response Example

```json
{
  "decision_id": "dec_example_001",
  "recommendation": "APPROVE",
  "risk_score": 0.18,
  "risk_level": "LOW",
  "policy": "Stablecoin Settlement Policy v1.0",
  "proof_hash": "SHA-256: 0x4a3f...9c2b",
  "verified": true,
  "latency_ms": 142
}
```

**Possible `recommendation` values:** `APPROVE`, `REVIEW`, `DENY`

**Possible `risk_level` values:** `LOW`, `MEDIUM`, `HIGH`

---

## curl Example

```sh
curl -X POST https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev/v1/decision/verify \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "action": "stablecoin_transfer",
    "amount": 50000,
    "currency": "USDC",
    "destination": "wallet_abc",
    "source": "Payment API",
    "priority": "High"
  }'
```

---

## SDK

Install the official JavaScript SDK:

```sh
npm install @trust-os-sdk/trust-os-sdk
```

```js
const { TrustOSClient } = require("@trust-os-sdk/trust-os-sdk");

const client = new TrustOSClient({
  apiKey: process.env.TRUST_OS_API_KEY
});

const result = await client.verifyDecision({
  action: "stablecoin_transfer",
  amount: 50000,
  currency: "USDC",
  destination: "wallet_abc"
});

console.log(result.recommendation); // APPROVE | REVIEW | DENY
```

---

## Local Development

This repository is a minimal API reference. No build step is required.

```sh
git clone https://github.com/trustos-trustfolio/trustos-api-public.git
cd trustos-api-public
```

To test against the production API, set your key as an environment variable:

```sh
export TRUST_OS_API_KEY=your_api_key_here
```

Then run the curl example above substituting `$TRUST_OS_API_KEY` for `YOUR_API_KEY`.

---

## Related Resources

- Developer Playground: https://demo.trust-os.io
- Financial Operations Demo: https://ops.trust-os.io
- SDK: https://www.npmjs.com/package/@trust-os-sdk/trust-os-sdk
- Website: https://trust-os.io

---

## Security Notes

- Do not commit API keys to source control
- Use environment variables for all credentials
- All examples in this repository use dummy values only
- Do not expose internal infrastructure or credentials in forks or PRs

---

## Early Access

Trust OS is in private beta. API keys are provisioned by invitation.

Contact: admin@trust-os.io
