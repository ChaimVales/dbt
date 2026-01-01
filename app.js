import express from "express";
import connectMongo from './db/mongo';
import routes  from './routes/index';
const port = 3015;
// require('dotenv').config();
const app = express();
app.use(express.json());


connectMongo();


app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




