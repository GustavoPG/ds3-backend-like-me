//index.js
import express from 'express';
import cors from 'cors';
import router from './src/routes/postRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server on http://${PORT}`);
})
