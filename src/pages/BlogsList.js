import { Link } from 'react-router-dom';

const BlogsList = ({ blogs }) => {
    
    return ( 
        <div className="blogs">
            {blogs.length > 0 ?
                blogs.map(blog => (
                    <div
                        className="blog-card"
                        key={blog.id}
                        >
                        <Link to={`${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <h3>By {blog.author}</h3>
                        <p>{blog.text.substring(1, 70)}...</p>
                        </Link>
                    </div>
                ))
                : <h1>Loading...</h1>}
        </div>
    );
}
 
export default BlogsList;