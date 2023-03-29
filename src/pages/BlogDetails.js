import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../api/blogs";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const singleBlog = blogs.find((blog) => blog.id === id);

  const deleteBlog = async () => {
    try {
      await api.delete(`${id}`);

      const filteredBlogs = blogs.filter((blog) => blog.id !== id);

      setBlogs([...filteredBlogs]);
      navigate("/blogs");
    } catch (error) {
      console.log(error.message);
    }
  };

  const blogDetailsCard = singleBlog && (
    <>
      <h1>{singleBlog.title}</h1>
      <h3>By: {singleBlog.author}</h3>
      <p>
        <strong>Categories: </strong>
        {singleBlog.categories}
      </p>
      <p>{singleBlog.text}</p>
    </>
  );

  const currentBlog = singleBlog ? (
    {
      title: singleBlog.title,
      author: singleBlog.author,
      categories: [...singleBlog.categories],
      text: singleBlog.text,
    }
  ) : (
    <h1>Not Found</h1>
  );

  const [toggleEdit, setToggleEdit] = useState(false);

  const [editBlog, setEditBlog] = useState(currentBlog);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditBlog((prevBlogState) => ({
      ...prevBlogState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`${id}`, editBlog);

      const updatedBlogsArr = [...blogs];
      setBlogs(
        updatedBlogsArr.map((blog) =>
          blog.id === id ? { ...blog, ...editBlog } : blog
        )
      );

      setEditBlog(currentBlog);
      setToggleEdit(!toggleEdit);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editBlogDetailsCard = (
    <form className="new-blog-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title: <br />
        <input
          required
          type="text"
          name="title"
          id="title"
          value={editBlog.title}
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
          value={editBlog.author}
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
          value={editBlog.categories}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="text">
        Text: <br />
        <textarea
          required
          name="text"
          id="text"
          value={editBlog.text}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </label>
      <button type="submit">Save</button>
      <button onClick={() => setToggleEdit(!toggleEdit)}>Discard</button>
    </form>
  );

  return (
    <>
      <Link className={"back-link"} to=".." relative="path">
        ⬅ Back to Blogs
      </Link>{" "}
      <br />
      <br />
      <button className="delete-blog-button" onClick={deleteBlog}>
        Delete
      </button>
      <button
        className="edit-blog-button"
        onClick={() => setToggleEdit(!toggleEdit)}
      >
        Edit
      </button>
      {singleBlog && toggleEdit ? editBlogDetailsCard : blogDetailsCard}
    </>
  );
};

export default BlogDetails;
