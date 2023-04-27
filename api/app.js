import * as dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan'
import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;

import handleJsonParsingError from './config/handleJsonParsingError.js'

import rootRouter from './routes/rootRouter.js';
import apiRouter from './routes/apiRouter.js';

app.use([
    express.json(),
    morgan('dev'),
    handleJsonParsingError
])

app.use('/', rootRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


