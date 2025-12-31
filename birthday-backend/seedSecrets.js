require("dotenv").config();
const mongoose = require("mongoose");
const Secret = require("./models/Secret");

mongoose.connect(process.env.MONGO_URL);

const secrets = [
  { order: 1, text: "Sometimes I replay random small moments with you..." },
  { order: 2, text: "I’ve wondered how different life would be..." },
  { order: 3, text: "This website only shows a fraction..." },
  // add up to 10 only
];

(async () => {
  await Secret.deleteMany();
  await Secret.insertMany(
    secrets.map((s, i) => ({
      ...s,
      revealAt: getRevealDate(i),
    }))
  );
  console.log("Secrets seeded");
  process.exit();
})();

function getRevealDate(index) {
  const start = new Date("2025-01-01"); // choose start date
  const dayGap = 3; // twice per week ≈ every 3 days
  start.setDate(start.getDate() + index * dayGap);
  return start;
}
