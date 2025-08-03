
const express = require('express');
const cors = require('cors');
const app = express();
//const PORT = 3000;

// Dummy data
const user = {
  name: "Pavi",
  referralCode: "pavi2025",
  totalDonations: 1234
};

const leaderboard = [
  { name: "Pavi", donations: 1234 },
  { name: "Alice", donations: 2500 },
  { name: "Bob", donations: 1700 }
];

app.use(cors());
app.get('/api/user', (req, res) => {
  res.json(user);
});
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

