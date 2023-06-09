import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import cors from 'cors';
import storeRouter from './routes/storeRoute.js';

dotenv.config();

//Constants

const PORT = process.env.PORT || 2001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.aipbrq8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.aipbrq8.mongodb.net/Delivery?retryWrites=true&w=majority`;

// const upload = multer({ dest: 'uploads/' });
const app = express();

//Middleware

app.use(cors());
app.use(express.json({ extended: true }));

app.use(express.static('tmp'));

//Routes
// app.use('/api', carRepairRouter);
app.use('/api/stores', storeRouter);

app.use((req, res, next) => {
  // Добавляем заголовки, которые нужны для всех запросов
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
// app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT));
// сгенерируй код компонента React в котором будет выпадающий список внутри выпадающего списка
