import "./Catalog.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default function Catalog() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk"
      );
      setBooks(res.data.results.lists);
      console.log(res.data.results.lists);
    };
    fetchBooks();
  }, []);
  return (
    <div>
      {books.map((book) => (
        <div className="book__item" key={uuidv4()}>
          dsdmkpasdsa
        </div>
      ))}
    </div>
  );
}
