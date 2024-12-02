import { useState } from "react";

const BlogForm = ({ onAddArticle }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onAddArticle(title);
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      {" "}
      <div className="form-group">
        {" "}
        <label htmlFor="articleTitle">Titolo dell'articolo</label>{" "}
        <input
          type="text"
          className="form-control"
          id="articleTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci il titolo dell'articolo"
        />{" "}
      </div>{" "}
      <button type="submit" className="btn btn-primary mt-2">
        {" "}
        Aggiungi Articolo{" "}
      </button>{" "}
    </form>
  );
};
export default BlogForm;
