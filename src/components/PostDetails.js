function PostDetails({post}) {
    return (
        <div>
            <p> id - {post.id}</p>
            <p> user id - {post.userId}</p>
            <p> title - {post.title}</p>
            <p> title - {post.body}</p>
            <hr/>
        </div>
    );
}

export default PostDetails;