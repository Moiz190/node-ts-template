import express, { Request, Response } from 'express';
import { v1Routes } from './routes/v1';
import http from 'http'
const app = express();
// const server = http.createServer(app)
const port = 3000;
app.get('/', (req: Request, res: Response) => {
    console.log('this is it')
    res.send('Hello, TypeScript + Node.js + Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.use('/v1', v1Routes)

// const startApp = async()=>{

// }

// startApp()
// export default app