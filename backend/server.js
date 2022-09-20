import express from "express";
import dotEnv from 'dotenv';
import connectDb from './config/db.js';
import uploadRoutes from './routes/uploadRoute.js';
import chefRoutes from './routes/chefRoutes.js';
import slotRoutes from './routes/soltsRoute.js';
import bookingSlot from './routes/BookingRoutes.js';
import passwordResetRoutes from './routes/passwordResetRoute.js';
import cors from 'cors';
import path from 'path';
import {countDocuments} from './controllers/countDocument.js';

dotEnv.config();
connectDb();
const app = express()
app.use (cors());
app.use(express.json())

const Port = process.env.PORT;

app.use('/api/chef',chefRoutes)
app.use('/api/passReset',passwordResetRoutes)
app.use('/api/slots',slotRoutes)
app.use('/api/upload',uploadRoutes)
app.use('/api/booking',bookingSlot)
app.get('/api/count',countDocuments);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get("/api/test", (req, res) => {
  res.send("test");
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', function(_, res) {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    })
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}




app.listen(Port||8080 ,console.log('Listening buddy'));