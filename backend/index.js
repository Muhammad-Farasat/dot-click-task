import dotenv from 'dotenv'
dotenv.config()


import express from 'express'
import cors from 'cors'
import connectToDb from './db/connectToDb.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';



connectToDb()


const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());

app.use(cors());


let message = 'Hello, World!';

// GET route
// app.get('/message', (req, res) => {
//   res.json({ message }); // Return the current message
// });


app.use(authRoutes)
  
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
  
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