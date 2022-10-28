import { Request, Response } from "express";
import createBookService from "../services/books/createBook.service";
import deleteBookService from "../services/books/deleteBook.service";
import listAllBooksService from "../services/books/listAllBooks.service";
import listBookByISBNService from "../services/books/listBookByISBN.service";
import updateBookService from "../services/books/updateBook.service";

export const createBookController = async (req: Request, res: Response) => {
  const data = req.body;
  const createdBook = await createBookService(data);
  return res.status(201).json(createdBook);
};

export const listAllBooksController = async (req: Request, res: Response) => {
  const allBooks = await listAllBooksService();
  return res.status(200).json(allBooks);
};

export const listBookByISBNController = async (req: Request, res: Response) => {
  const isbn = req.params.isbn;
  const bookFound = await listBookByISBNService(isbn);
  return res.status(200).json(bookFound);
};

export const updateBookController = async (req: Request, res: Response) => {
  const isbn = req.params.isbn;
  const data = req.body;
  const updatedBook = await updateBookService(data, isbn);
  return res.status(200).json(updatedBook);
};

export const deleteBookController = async (req: Request, res: Response) => {
  const isbn = req.params.isbn;
  await deleteBookService(isbn);
  return res.status(204).send();
};
