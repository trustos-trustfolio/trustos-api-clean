# Trust OS API

Decision Verification API for high-impact operations.

---

## What is Trust OS?

Trust OS is a Decision Verification Platform that helps organizations verify high-impact decisions before execution.

- Decision verification
- Risk evaluation
- Policy enforcement
- Auditability
- Explainability
- API-first integration

---

## Features

- Decision verification
- Risk scoring
- Policy evaluation
- Audit-ready responses

---

## Quick Start

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

**Response:**

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

`recommendation`: `APPROVE` | `REVIEW` | `DENY`

Authentication: pass your API key as `x-api-key` header. API keys are provisioned by invitation.

---

## Documentation

- Website: https://trust-os.io
- Developer Docs: https://trust-os.io/docs
- OpenAPI: https://trust-os.io/openapi.json

---

## License

MIT
