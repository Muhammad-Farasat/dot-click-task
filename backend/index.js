import dotenv from 'dotenv'
dotenv.config()


import express from 'express'
import cors from 'cors'
import connectToDb from './db/connectToDb.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';

const __dirname = path.resolve();


connectToDb()


const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());

app.use(cors());


// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));

let message = 'Hello, World!';

// GET route
app.get('/message', (req, res) => {
  res.json({ message }); 
});

console.log(path.join(__dirname, 'dist', 'index.html'));


app.use('/api',authRoutes)
  
// app.use(express.static(path.join(__dirname, '/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
  
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
  
app.listen(port, (error) => {
    if (!error) {
      console.log(`Example app listening on port ${port}`);
    } else {
      console.log('This is error!', error);
    }
});