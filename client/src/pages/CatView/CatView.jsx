import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CatView() {

    const { id } = useParams();

    return (
        <>
            <h1>Cat view</h1>
            <p>Cat id: {id}</p>
            <Link to={"/"}>
                <p>Go back</p>
            </Link>
        </>
    )
}