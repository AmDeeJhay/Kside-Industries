const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/reviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error(err));

// Review Schema and Model
const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  review_text: String,
  status: { type: String, default: 'pending' },
  created_at: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);

// Routes
app.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/reviews', async (req, res) => {
  const { status } = req.query;
  try {
    const reviews = await Review.find(status ? { status } : {});
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const review = await Review.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
