import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './Route/userRoute.js';
import imageRouter from './Route/ImageRoutes.js';

const app = express();

app.use(cors({
    origin: 'https://vision-craft-yjlb.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token']
}));

app.use(express.json());

await connectDB();

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => {
    res.send('API Working fine');
});

export default app;