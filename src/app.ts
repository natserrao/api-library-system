import "reflect-metadata";
import "express-async-errors";
import express from "express";
import bookRoutes from "./routes/books.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use(handleErrorMiddleware);

export default app;
