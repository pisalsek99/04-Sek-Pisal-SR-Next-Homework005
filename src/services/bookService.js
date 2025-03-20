// src/services/bookService.js

export const getAllBooks = async () => {
  try {
    const response = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
    const data = await response.json();
    return data.payload || [];
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};
//Get all book categories
export const getAllBookCategories = async () => {
  try {
    const response = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category`
    );
    const data = await response.json();
    return data.payload || [];
  } catch (error) {
    console.error("Error fetching book categories:", error);
  }
};
// /api/cartoon_genre
// Get all cartoon genres(categories)
export const getAllCartoonsCategories = async () => {
  try {
    const response = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon_genre`
    );
    const data = await response.json();
    return data.payload || [];
  } catch (error) {
    console.error("Error fetching cartoon genres:", error);
  }
};

// Get all cartoons
export const getAllCartoons = async () => {
  try {
    const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`);
    const data = await response.json();
    return data.payload || [];
  } catch (error) {
    console.error("Error fetching cartoons:", error);
  }
};
export const getItemById = async (id, type) => {
  try {
    let url = `https://nextjs-homework005.vercel.app/api/${id}/${type}`;

    if (type === "book") {
      url = `https://nextjs-homework005.vercel.app/api/book/${id}`;
    } else if (type === "cartoon") {
      url = `https://nextjs-homework005.vercel.app/api/cartoon/${id}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return null;
  }
};

// Search book by book title
export const searchBookByTitle = async (title) => {
  try {
    const response = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?search=${title}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error searching book by title:", error);
    return null;
  }
};
// Get books by book category id
export const getBooksByCategoryId = async (id) => {
  try {
    const response = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${id}`
    );
    const data = await response.json();
    return data.payload || null;
  } catch (error) {
    console.error("Error fetching books by category id:", error);
    return null;
  }
};
