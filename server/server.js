import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import main from "./configs/groq.js";

const app = express();

await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/test", async (req, res) => {
  const result = await main("Hello AI");
  res.send(result);
});

app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;










