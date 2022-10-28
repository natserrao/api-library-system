import AppDataSource from "../../data-source";
import Book from "../../entities/book.entity";
import { AppError } from "../../errors/appError";

const deleteBookService = async (isbn: string) => {
  const bookRepository = AppDataSource.getRepository(Book);
  const findBook = await bookRepository.findOne({
    where: {
      isbn: isbn,
    },
  });
  if (!findBook) {
    throw new AppError("Book not found", 404);
  }
  return await bookRepository.delete({
    isbn,
  });
};

export default deleteBookService;
