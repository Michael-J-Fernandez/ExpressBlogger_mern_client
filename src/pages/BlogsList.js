import { Link } from 'react-router-dom';

const BlogsList = ({ blogs }) => {
    
    return ( 
        <div className="blogs">
            {blogs && blogs.map(blog => (
                <Link to={`${blog.id}`}>
                    <div
                        className="blog-card"
                    >
                    <h1>{blog.title}</h1>
                    <h3>By {blog.author}</h3>
                    <p>{blog.text.substring(1, 70)}...</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default BlogsList;