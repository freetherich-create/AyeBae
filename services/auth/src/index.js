const express = require('express');
const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Auth service listening on ${port}`));
