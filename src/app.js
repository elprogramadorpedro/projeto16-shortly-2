import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

import router from './routes/index.js';

const app = express();
app.use(cors());
app.use(json());

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(chalk.blue(`Running on port ${PORT}`));
});
