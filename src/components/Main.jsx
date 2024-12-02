import { useState } from "react";
import BlogForm from "./Form";
import Card from "./card";
import ArticleList from "./ArticleList";
import { posts } from "./Data/posts";

export default function Main() {
  const [articles, setArticles] = useState([]);

  const addArticle = (title) => {
    setArticles([...articles, title]);
  };

  const deleteArticle = (index) => {
    const newArticles = articles.filter((_, i) => i !== index);
    setArticles(newArticles);
  };

  const publishedPosts = posts.filter((post) => post.published);

  return (
    <div className="container mx-auto">
      <h1 className="my-4">Gestione Articoli del Blog</h1>
      <BlogForm onAddArticle={addArticle} />
      <ArticleList articles={articles} onDeleteArticle={deleteArticle} />
      <div className="row justify-content-center">
        {publishedPosts.map((post) => (
          <div className="col-4 p-3" key={post.id}>
            <Card
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
