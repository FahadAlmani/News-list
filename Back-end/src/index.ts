import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes_controller";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.use(routes);

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Back-end is working");
});

app.listen(PORT, (): void => {
  console.log(`[Server]: Server Start: http://localhost:${PORT}`);
});

export default app;
