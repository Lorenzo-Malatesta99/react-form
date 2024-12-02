
import defaultImage from '../assets/image.png'

export default function Card({ title, content, image, tags}) {
  return (
    <div className="card">
      <img src={image || defaultImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul>
          Tags: <a href="">{tags + ""}</a>
        </ul>
        <p className="card-text">
          {content}
        </p>
        <a href="#" className="btn btn-primary">
          Leggi di più
        </a>
      </div>
    </div>
  );
}
