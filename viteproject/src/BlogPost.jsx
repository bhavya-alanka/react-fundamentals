function BlogPost(post){
    return(
        <div>
            <p>
                Author:{post.Author}
            </p>
            <p>
                Title:{post.Title}
            </p>
            <p>
                Description:{post.Description}
            </p>
        </div>
    )
}
export default BlogPost