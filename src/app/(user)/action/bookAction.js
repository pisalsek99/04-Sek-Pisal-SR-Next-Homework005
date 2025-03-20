export const categoryFilter = (category) => {
  return (book) => book.book_cate_id === category;
};
