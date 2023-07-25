import Article from "./Article"

function ArticleList({posts}){
    const diplayedArticles = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
        <main>
            {diplayedArticles}
        </main>
    )

}

export default ArticleList