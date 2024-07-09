import { useState } from "react";

export const RegistrationForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log(title);
    console.log(author);
    console.log(genre);
    console.log(description);
  };

  return (
    <div>
      <form action="">
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id=""
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            id=""
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
