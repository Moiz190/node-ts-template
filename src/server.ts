import express, { Request, Response } from 'express';
import { v1Routes } from '@/routes/v1';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json())
const port = 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!a');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.use('/v1', v1Routes)