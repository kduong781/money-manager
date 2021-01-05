import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//body parser setup
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//Cors setup
app.use(cors());
routes(app);
app.get("/", (req,res) => {
  res.send("Kitty is beautiful");
});


app.listen(PORT, () => {
  console.log(`Your server is running osn ${PORT}`);
});
