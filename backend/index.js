const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const ProductRouter = require('./routes/ProductsRoute');
const UserRouter = require('./routes/UserRoute');

const app = express();
const PORT = 4000;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', UserRouter);
app.use('/products', ProductRouter);

const mongoDB = 'mongodb://localhost/amazon';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
