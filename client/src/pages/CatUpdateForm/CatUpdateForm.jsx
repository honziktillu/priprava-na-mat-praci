import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CatUpdateForm() {

    const { id } = useParams();

    return (
        <>
            <h1>Cat update form</h1>
            <p>Cat id: {id}</p>
            <Link to={"/"}>
                <p>Go back</p>
            </Link>
        </>
    )
}