const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello root route');
});

// Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
