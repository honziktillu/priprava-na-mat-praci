import { Link, useParams } from "react-router-dom";
import { getCatById } from "../../models/Cat";
import { useEffect, useState } from "react";

export default function CatView() {
  const { id } = useParams();
  const [cat, setCat] = useState();
  const [loaded, setLoaded] = useState();

  const load = async () => {
    const data = await getCatById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCat(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cat not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading cat...</p>
      </>
    )
  }

  return (
    <>
      <h1>Cat view</h1>
      <p>Cat id: {id}</p>
      <p>Cat name: {cat.name}</p>
      <p>Cat legs: {cat.legs}</p>
      <p>Cat color: {cat.color}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
