
import { FaTrash } from "react-icons/fa"; 

const ArticleList = ({ articles, onDeleteArticle }) => {
  return (
    <ul className="list-group">
      {articles.map((article, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {article}
          <FaTrash
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => onDeleteArticle(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
