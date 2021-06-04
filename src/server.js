import express from 'express';
import morgan from 'morgan';
import globalRouter from './routes/globalRouter'
import userRouter from './routes/userRouter'
import videoRouter from './routes/videoRouter'

const PORT = 4001;
const app = express();
const handleListening = () => console.log(`👋 Server listening on port http://localhost:${PORT} 🚀`);

// settings
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views/');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({"extended": true}));

// routes

app.use('/', globalRouter)
app.use('/users', userRouter)
app.use('/videos', videoRouter)

// listen
app.listen(PORT, handleListening);
