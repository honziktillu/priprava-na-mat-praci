import { Link } from "react-router-dom"

export default function CatLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/cat/${props.id}`}>
                <p>View cat</p>
            </Link>
        </>
    )
}