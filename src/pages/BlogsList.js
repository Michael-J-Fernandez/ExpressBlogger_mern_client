

const BlogsList = ({ blogs }) => {
    
    return ( 
        <div className="blogs">
            {blogs && blogs.map(blog => (
                <div className="blog-card">
                <h1>{blog.title}</h1>
                <h3>By {blog.author}</h3>
                <p>{blog.text.substring(1, 70)}...</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogsList;