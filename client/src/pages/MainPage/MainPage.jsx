import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to={"/cat/gfdf64g6dfg46df5"}>
        <p>Cat view</p>
      </Link>
      <Link to={"/createcat"}>
        <p>Cat create form</p>
      </Link>
      <Link to={"/updatecat/df46g65df4g6df"}>
        <p>Cat update form</p>
      </Link>
      <Link to={"/cats"}>
        <p>Cat list</p>
      </Link>
    </>
  );
}
