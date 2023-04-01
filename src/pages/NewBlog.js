import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../api/blogs";

const NewBlog = ({ setBlogs }) => {

  const navigate = useNavigate();

  const formReset = {
    title: "",
    author: "",
    categories: [],
    text: "",
  };

  const [newBlog, setNewBlog] = useState(formReset);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewBlog((prevBlogState) => ({
      ...prevBlogState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/blogs", newBlog);
      const { savedBlog } = response.data;

      setBlogs((prev) => [...prev, savedBlog]);
      navigate(`/blogs/${savedBlog.id}`);
      
    } catch (error) {
      console.log(error.message);
    }

    setNewBlog(formReset);
  };

  return (
    <form className="new-blog-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title: <br />
        <input
          required
          type="text"
          name="title"
          id="title"
          value={newBlog.title}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="author">
        Author: <br />
        <input
          required
          type="text"
          name="author"
          id="author"
          value={newBlog.author}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="categories">
        Categories: <br />
        <input
          required
          type="text"
          name="categories"
          id="categories"
          value={newBlog.categories}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="text">
        Text: <br />
        <textarea
          required
          name="text"
          id="text"
          value={newBlog.text}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </label>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewBlog;
