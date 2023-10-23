import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./Routes/index.routes";
import logger from "./Middlewares/Logger/logger.middlewares"
import { rateLimiter } from "./Middlewares/rateLimiter.middlewares";
const app = express();

app.use(logger);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api", rateLimiter, userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});