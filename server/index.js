const express = require('express'); // Adjust the path as necessary
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./db/database');
const cors = require('cors')

// Connect to MongoDB


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
// Use user routes
app.use('/api', userRoutes);



connectDb().then(()=>{
    const PORT = 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
