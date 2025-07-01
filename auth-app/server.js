// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./models/User');
// const Task = require('./models/Task');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/authDemo', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Signup Route
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password required' });
//   }

//   const exists = await User.findOne({ username });
//   if (exists) {
//     return res.status(400).json({ message: 'Username already exists' });
//   }

//   const newUser = new User({ username, password });
//   await newUser.save();
//   res.json({ message: 'Signup successful' });
// });

// // Login Route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password required' });
//   }

//   const user = await User.findOne({ username, password });
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   res.status(200).json({ message: 'Login successful', username }); // ✅ Return username to store in sessionStorage
// });

// // Create Task
// app.post('/tasks', async (req, res) => {
//   const { username, text } = req.body;

//   if (!username || !text) {
//     return res.status(400).json({ message: 'Username and task text required' });
//   }

//   try {
//     const task = new Task({ username, text });
//     await task.save();
//     res.json({ message: 'Task added', task });
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving task' });
//   }
// });

// // Get All Tasks for User
// app.get('/tasks/:username', async (req, res) => {
//   try {
//     const tasks = await Task.find({ username: req.params.username });
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching tasks' });
//   }
// });

// // Update Task
// app.put('/tasks/:id', async (req, res) => {
//   const { completed } = req.body;
//   try {
//     await Task.findByIdAndUpdate(req.params.id, { completed });
//     res.json({ message: 'Task updated' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating task' });
//   }
// });

// // Delete Task
// app.delete('/tasks/:id', async (req, res) => {
//   try {
//     await Task.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Task deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting task' });
//   }
// });

// // Start Server
// app.listen(3000, () => {
//   console.log('✅ Server running at http://localhost:3000');
// });




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/authDemo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Signup
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ message: 'Username already exists' });

  await new User({ username, password }).save();
  res.json({ message: 'Signup successful' });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  res.status(200).json({ message: 'Login successful' });
});

// Create Task
app.post('/tasks', async (req, res) => {
  const { username, text } = req.body;
  const task = new Task({ username, text });
  await task.save();
  res.json({ message: 'Task added', task });
});

// Get Tasks
app.get('/tasks/:username', async (req, res) => {
  const tasks = await Task.find({ username: req.params.username });
  res.json(tasks);
});

// Update Task
app.put('/tasks/:id', async (req, res) => {
  const { completed } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { completed });
  res.json({ message: 'Task updated' });
});

// Delete Task
app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});