export interface IBookCreate {
  isbn: string;
  name: string;
  author: string;
  pages: number;
  copies: number;
}

export interface IBookUpdate {
  name?: string;
  author?: string;
  pages?: number;
  copies?: number;
}
