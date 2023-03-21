

const BlogsList = ({ blogs }) => {
    
    return ( 
        <div className="blogs">
            {blogs.map(blog => (
                <div className="blog-card">
                <h1>{blog.title}</h1>
                <h3>{blog.author}</h3>
                <p>{blog.text}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogsList;