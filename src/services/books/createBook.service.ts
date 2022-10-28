import { IBookCreate } from "../../interfaces/books.interface";
import AppDataSource from "../../data-source";
import Book from "../../entities/book.entity";
import { AppError } from "../../errors/appError";

const createBookService = async ({
  isbn,
  name,
  author,
  pages,
  copies,
}: IBookCreate): Promise<IBookCreate> => {
  const bookRepository = AppDataSource.getRepository(Book);
  const bookFound = await bookRepository.findOneBy({
    isbn,
  });

  if (bookFound) {
    throw new AppError("This book is already registered");
  }

  const newBook = bookRepository.create({
    isbn,
    name,
    author,
    pages,
    copies,
  });
  await bookRepository.save(newBook);
  return newBook;
};

export default createBookService;
