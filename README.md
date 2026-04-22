# Trust OS API

Trust OS is a verification layer for decisions before execution.

This repository provides a minimal API flow:

1. Score a decision  
2. Log the decision  
3. Verify its integrity  

---

## What this does

Trust OS helps systems verify decisions before execution.

Instead of executing first and auditing later, this API lets developers:

- evaluate a decision  
- record the decision  
- verify the integrity of the recorded result  

This makes it easier to build verifiable transaction and decision flows across financial systems, wallets, autonomous systems, and AI-driven applications.

---

## Use Case

Verify a transaction before execution.

---

## Quick Start

### Endpoints

POST /v1/decision/score  
POST /v1/decision/log  
GET  /v1/decision/verify/:id  

---

## Example Flow

A user attempts to execute a transaction:

score risk  
log decision  
verify integrity  

---

## Example (curl)

### 1. Score a decision

    curl -X POST https://demo.trust-os.io/v1/decision/score \
      -H "Content-Type: application/json" \
      -H "x-api-key: YOUR_API_KEY" \
      -d '{
        "user_id": "user_123",
        "action": "transfer",
        "amount": 500000,
        "currency": "USD",
        "destination": "wallet_abc",
        "timestamp": "2026-04-22T00:00:00Z",
        "context": {
          "device": "web",
          "location": "JP",
          "profile": "demo"
        }
      }'

Response:

    {
      "decision_id": "dec_xxx",
      "risk_level": "MEDIUM",
      "recommendation": "REVIEW",
      "timestamp": "2026-04-22T00:00:00Z"
    }

---

### 2. Log the decision

    curl -X POST https://demo.trust-os.io/v1/decision/log \
      -H "Content-Type: application/json" \
      -H "x-api-key: YOUR_API_KEY" \
      -d '{
        "decision_id": "dec_xxx"
      }'

Response:

    {
      "ledger_id": "ledger_xxx",
      "status": "RECORDED",
      "timestamp": "2026-04-22T00:00:00Z"
    }

---

### 3. Verify integrity

    curl -X GET https://demo.trust-os.io/v1/decision/verify/dec_xxx \
      -H "x-api-key: YOUR_API_KEY"

Response:

    {
      "decision_id": "dec_xxx",
      "verified": true,
      "integrity": "VALID"
    }

---

## Demo

https://demo.trust-os.io

---

## Real-World Applications

Trust OS can be applied to:

- payment authorization integrity  
- stablecoin and card verification flows  
- AI agent action verification  
- DAO treasury execution guardrails  
- cross-border settlement integrity  
- trade execution integrity  

---

## Notes

- Replace YOUR_API_KEY with your API key  
- This is a minimal implementation designed for easy integration  
- The current demo focuses on a simple score → log → verify flow  
- This repository is intended as a lightweight starting point for developers  

---

## Why this matters

Most systems execute first and explain later.

Trust OS flips that model:

- verify before execution  
- record the decision path  
- prove integrity afterwards  

---

## Summary

Trust OS provides a simple but powerful pattern:

1. Decide before execution  
2. Record the decision  
3. Verify the integrity  

Built for the era of AI agents and autonomous systems.
