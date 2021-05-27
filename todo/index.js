const express = require('express');

const app = express();
app.use(express.json({ extended: true }));

// Define routes
app.use('/todos', require('./routes/api/todos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
