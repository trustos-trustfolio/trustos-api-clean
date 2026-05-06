const { TrustOSClient } = require("trust-os-sdk");

const client = new TrustOSClient({
  baseUrl: "https://trustos-core-gateway-v2-7jm9owrs.an.gateway.dev",
  apiKey: "YOUR_API_KEY"
});

(async () => {
  try {
    const result = await client.verifyDecision({
      user_id: "user_001",
      action: "stablecoin_transfer",
      amount: 120000,
      currency: "USD",
      destination: "wallet_abc",
      context: {
        destination_risk: 0.8,
        history_score: 0.4,
        payment_type: "stablecoin",
        compliance_context: "aml_pre_execution_check"
      }
    });

    console.log("advanced verification result:", result);
  } catch (err) {
    console.error("error:", err.message);
  }
})();
