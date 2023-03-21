import { Link, useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {

    const { id } = useParams();

    const singleBlog = blogs.find(blog => blog.id === id)

    return (
      <>
        <Link to=".." relative="path">
          ⬅️ Back to Blogs
        </Link>
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