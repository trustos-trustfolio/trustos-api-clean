const { execSync } = require("child_process");
const { TrustOSClient } = require("trust-os-sdk");

const bearerToken = execSync("gcloud auth print-identity-token", {
  encoding: "utf-8"
}).trim();

const client = new TrustOSClient({
  baseUrl: "https://trustos-api-591254547688.asia-northeast1.run.app",
  apiKey: "YOUR_API_KEY",
  bearerToken
});

(async () => {
  try {
    const decision = await client.score({
      user_id: "user_001",
      action: "transfer",
      amount: 12000,
      currency: "USD",
      destination: "wallet_abc",
      timestamp: new Date().toISOString(),
      context: {
        history_score: 0.4,
        destination_risk: 0.8,
        velocity_score: 0.6,
        behavioral_flag: "unusual_pattern"
      }
    });

    console.log("decision:", decision);

    const log = await client.log({
      decisionId: decision.decision_id
    });

    console.log("log:", log);
    const verify = await client.verify(decision.decision_id);

    console.log("verify:", verify);
  } catch (err) {
    console.error("error:", err.message);
  }
})();
