const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const {default: mongoose} = require('mongoose');

const port = 8000;

const cors = require('cors');
const app = express();

const router = require('./router');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database connected successfully');
})
.catch((err) => {
    console.log(err);
});