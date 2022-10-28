import AppDataSource from "../../data-source";
import Book from "../../entities/book.entity";
import { AppError } from "../../errors/appError";
import { IBookCreate } from "../../interfaces/books.interface";

const listBookByISBNService = async (isbn: string): Promise<IBookCreate> => {
  const bookRepository = AppDataSource.getRepository(Book);
  const book = await bookRepository.findOne({
    where: {
      isbn: isbn,
    },
  });
  if (!book) {
    throw new AppError("Book not found", 404);
  }
  return book;
};

export default listBookByISBNService;
