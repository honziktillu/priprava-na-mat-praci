import { useParams, Link } from "react-router-dom";

export default function CreatedCat() {
  const { id } = useParams();

  return (
    <>
      <p>Cat was created: {id}</p>
      <Link to={`/cat/${id}`}>
        <p>View cat</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
