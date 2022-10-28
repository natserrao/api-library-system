import AppDataSource from "../../data-source";
import Book from "../../entities/book.entity";
import { IBookCreate } from "../../interfaces/books.interface";

const listAllBooksService = async (): Promise<IBookCreate[]> => {
  const bookRepository = AppDataSource.getRepository(Book);
  const allBooks = await bookRepository.find();

  return allBooks;
};

export default listAllBooksService;
