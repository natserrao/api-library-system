import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("books")
class Book {
  @PrimaryColumn({ length: 50 })
  isbn: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60 })
  author: string;

  @Column()
  pages: number;

  @Column()
  copies: number;
}

export default Book;
