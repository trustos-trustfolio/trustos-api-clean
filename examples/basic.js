const { TrustOSClient } = require("trust-os-sdk");

const client = new TrustOSClient({
  baseUrl: "https://api.trust-os.io",
  apiKey: "YOUR_API_KEY"
});

(async () => {
  try {
    const result = await client.verifyDecision({
      user_id: "test_user",
      action: "transfer",
      amount: 50000,
      currency: "JPY",
      destination: "wallet_xyz"
    });

    console.log("verification result:", result);
  } catch (err) {
    console.error("error:", err.message);
  }
})();
