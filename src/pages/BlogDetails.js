import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../api/blogs'

const BlogDetails = ({ blogs, setBlogs }) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const singleBlog = blogs.find(blog => blog.id === id)

    const deleteBlog = async () => {
      try {
        const response = await api.delete(`${id}`);
        
        const filteredBlogs = blogs.filter(blog => blog.id !== id)

        setBlogs([ ...filteredBlogs ]);
        navigate('/blogs')

      } catch (error) {
        console.log(error.message);
      }
      console.log('Will delete blog with id: ' + id)
    }

    return (
      <>
        <Link className={"back-link"} to=".." relative="path">
          ⬅️ Back to Blogs
        </Link>
        <div
          className="delete"
          onClick={deleteBlog}
        >
          [ X ]
        </div>
        {singleBlog && (
          <>
            <h1>{singleBlog.title}</h1>
            <h3>{singleBlog.author}</h3>
            <p>{singleBlog.text}</p>
          </>
        )}
      </>
    );
}
 
export default BlogDetails;