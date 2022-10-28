import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  listAllBooksController,
  listBookByISBNController,
  updateBookController,
} from "../controllers/books.controller";

const bookRoutes = Router();

bookRoutes.post("", createBookController);
bookRoutes.get("", listAllBooksController);
bookRoutes.get("/:isbn", listBookByISBNController);
bookRoutes.patch("/:isbn", updateBookController);
bookRoutes.delete("/:isbn", deleteBookController);

export default bookRoutes;
