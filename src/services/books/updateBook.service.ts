import AppDataSource from "../../data-source";
import Book from "../../entities/book.entity";
import { AppError } from "../../errors/appError";
import { IBookCreate, IBookUpdate } from "../../interfaces/books.interface";

const updateBookService = async (
  { name, author, copies, pages }: IBookUpdate,
  isbn: string
): Promise<IBookCreate> => {
  const bookRepository = AppDataSource.getRepository(Book);
  const findBook = await bookRepository.findOne({
    where: {
      isbn: isbn,
    },
  });
  if (!findBook) {
    throw new AppError("Book not found", 404);
  }
  await bookRepository.update(isbn, {
    name: name ? name : findBook.name,
    author: author ? author : findBook.author,
    copies: copies ? copies : findBook.copies,
    pages: pages ? pages : findBook.pages,
  });

  const book = await bookRepository.findOneBy({
    isbn,
  });
  return book!;
};

export default updateBookService;
