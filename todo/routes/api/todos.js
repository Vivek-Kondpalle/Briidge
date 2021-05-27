const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route   GET /todos
// @desc    Access all todos using userId
// @access  Public

router.get('/', async (req, res) => {
  try {
    const userId = req.body.userId;

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    );

    if (response.data.length === 0) {
      return res.status(404).json({ msg: 'Invalid UserId' });
    }
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
