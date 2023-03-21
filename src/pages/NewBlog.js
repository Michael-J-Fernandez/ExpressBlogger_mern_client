import { useState } from 'react';

const NewBlog = ({ blogs, setBlogs }) => {

    const formReset = {
        title: "",
        author: "",
        categories: [],
        text: ""
    }

    const [newBlog, setNewBlog] = useState(formReset)

    const handleChange = e => {
        const { name, value } = e.target;

        setNewBlog(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        console.log('new blog submitted! ', newBlog)
        setBlogs(prev => ([
            ...prev,
            newBlog
        ]))

        setNewBlog(formReset)

    }

    return (
        <div className="new-blog-form">
            <label htmlFor="title">
                Title: <br />
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newBlog.title}
                    onChange={e => handleChange(e)}
                />
            </label>
            <label htmlFor="author">
                Author: <br />
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={newBlog.author}
                    onChange={e => handleChange(e)}
                />
            </label>
            <label htmlFor="categories">
                Categories: <br />
                <input
                    type="text"
                    name="categories"
                    id="categories"
                    value={newBlog.categories}
                    onChange={e => handleChange(e)}
                />
            </label>
            <label htmlFor="text">
                Text: <br />
                <textarea
                    name="text"
                    id="text"
                    value={newBlog.text}
                    onChange={e => handleChange(e)}
                >
                </textarea>
            </label>
            <button
                onClick={handleSubmit}
                type="submit"
            >
                Post
            </button>
        </div>
    );
}
 
export default NewBlog;