// src/pages/LibraryShelves.jsx

import React, { useEffect, useState } from 'react';
import './LibraryShelves.css';

const departments = ['Science', 'Math', 'History', 'Art'];

const LibraryShelves = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const sampleBooks = [
      {
        _id: '1',
        title: 'QED: The Strange Theory of Light and Matter',
        author: 'Richard P. Feynman',
        department: 'Science',
        pdf: '/books/qed-feynman.pdf',
        cover: '/images/books/science1.jpeg', // ✅ from public/
      },
      {
        _id: '2',
        title: 'Math Magic',
        author: 'John Smith',
        department: 'Math',
        pdf: '/books/math-magic.pdf',
        cover: '/images/books/math1.jpg',
      },
      {
        _id: '3',
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        department: 'History',
        pdf: '/books/brief-history.pdf',
        cover: '/images/books/history1.jpg',
      },
      {
        _id: '4',
        title: 'Art of the Modern World',
        author: 'Emily Clark',
        department: 'Art',
        pdf: '/books/art-modern.pdf',
        cover: '/images/books/art1.jpg',
      },
    ];
    setBooks(sampleBooks);
  }, []);

  const filteredBooks = (dept) =>
    books.filter(
      (book) =>
        book.department.toLowerCase() === dept.toLowerCase() &&
        (book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="library-container">
      <h1 className="library-title">📚 Welcome to the Bookshelf Library</h1>

      <div className="librarian-search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search books by title or author..."
        />
      </div>

      {departments.map((dept) => {
        const deptBooks = filteredBooks(dept);
        return (
          <div key={dept} className="shelf-wrapper">
            <h2 className="shelf-label">{dept} Shelf</h2>
            <div className="shelf">
              {deptBooks.length > 0 ? (
                deptBooks.map((book) => (
                  <div
                    key={book._id}
                    className="book"
                    style={{ backgroundImage: `url(${book.cover})` }}
                  >
                    <div className="book-info">
                      <span className="book-title">{book.title}</span>
                      <span className="book-author">{book.author}</span>
                    </div>
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-button"
                    >
                      📖 Read
                    </a>
                  </div>
                ))
              ) : (
                <div className="no-books">No books found on this shelf.</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LibraryShelves;
